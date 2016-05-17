import {connect} from "react-redux";
import {pickWinner} from "../actions";
import Attendance from "../components/Attendance";

// TODO Not working properly so not using yet
const getQuarterlyAttendance = (state) => {
    return state.stats.filter(s => (s.year === state.selectedYear && s.quarter === state.selectedQuarter))[0];
}

const mapStateToProps = (state) => {
    return {
        club: state.club,
        stats: state.stats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onWinnerClick: (year, quarter) => {
            dispatch(pickWinner(year, quarter))
        }
    }
}

const QuarterlyAttendance = connect(mapStateToProps, mapDispatchToProps)(Attendance);

export default QuarterlyAttendance
