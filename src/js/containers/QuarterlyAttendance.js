import { connect } from "react-redux";
import { pickWinner } from "../actions";
import moment from "moment";
import { find, forEach, template } from "lodash";
import Attendance from "../components/Attendance";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    stats: getQuarterlyAttendance(state.club, state.view.selectedYear, state.view.selectedQuarter)
});

// const mapDispatchToProps = (dispatch) => ({
//     onWinnerClick (year, quarter) {
//         dispatch(pickWinner(year, quarter))
//     }
// });

const getQuarterlyAttendance = (club, year, quarter) => {
    let events = findAllEvents(club.events, year, quarter);
    let playerList = countAttendance(events, club.players);
    return {
        year: year,
        quarter: quarter,
        winners: [],
        pickWinners: false,
        playerList: playerList,
        totalAttendance: getTotalAttendance(playerList)
    }
}

const findAllEvents = (events, year, quarter) => {
    return events.filter((e) => {
        return moment(e.date).year() === year && moment(e.date).quarter() === quarter
    })
}

const countAttendance = (events, players) => {
    let eventPlayers = [];
    let allPlayers = players.filter(p => !p.organizer);
    events.forEach((e) => {
        forEach(e.attendees, (a) => {
            let p = find(eventPlayers, {id: a});
            if (p) {
                p.attended++
            }
            else {
                p = find(allPlayers, {id: a});
                if (p) {
                    p.attended = 1;
                    eventPlayers.push(p);
                }
            }
        })
    })
    return eventPlayers;
}

const getTotalAttendance = (playerList) => {
    let total = 0;
    playerList.forEach(p => {
        total += p.attended
    });
    return total;
}

const QuarterlyAttendance = connect(
    mapStateToProps,
    {onWinnerClick: pickWinner}
)(Attendance);

export default QuarterlyAttendance;