import { connect } from "react-redux";
import { pickWinner } from "../actions";
import Attendance from "../components/Attendance";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    stats: getQuarterlyAttendance(state.stats, state.view.selectedYear, state.view.selectedQuarter)
});

const mapDispatchToProps = (dispatch) => ({
    onWinnerClick (year, quarter) {
        dispatch(pickWinner(year, quarter))
    }
});

const getQuarterlyAttendance = (stats, year, quarter) => {
    let filtered = stats.filter(s => (s.year === year && s.quarter === quarter));
    return filtered.length > 0 ? initQuarterlyAttendance(filtered[0]) : {
        year: year,
        quarter: quarter,
        totalAttendance: 0,
        winners: [],
        playerList: []
    };
}

const initQuarterlyAttendance = (quarterlyStats) => {
    quarterlyStats.totalAttendance = totalAttendance(quarterlyStats.playerList);
    return quarterlyStats;
}

const totalAttendance = (playerList) => {
    let total = 0;
    playerList.forEach(p => {
        total += p.events
    });
    return total;
}

const QuarterlyAttendance = connect(mapStateToProps, mapDispatchToProps)(Attendance);

export default QuarterlyAttendance
