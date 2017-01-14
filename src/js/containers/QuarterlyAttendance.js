import { connect } from "react-redux";
import { pickWinner } from "../actions";
import moment from "moment";
import { find, template } from "lodash";
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

const findPlayer = (players, id) => {
    let player = find(players, {id: id})
    let playerName = template('<%= first %> <%= last %>')
    return {
        name: playerName(player),
        events: 0
    }
}

const countAttendance = (events, players) => {
    let playerList = []
    events.forEach((e) => {
        playerList = playerList.concat(e.attendees.map((a) => {
            let p = find(playerList, {id: a}) || findPlayer(players, a);
            p.events++
            return p;
        }))
    })
    return playerList
}

const getTotalAttendance = (playerList) => {
    let total = 0;
    playerList.forEach(p => {
        total += p.events
    });
    return total;
}

const QuarterlyAttendance = connect(
    mapStateToProps,
    {onWinnerClick: pickWinner}
)(Attendance);

export default QuarterlyAttendance;