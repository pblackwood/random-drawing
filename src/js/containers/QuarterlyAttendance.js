import { connect } from "react-redux";
import { pickWinner } from "../actions";
import Attendance from "../components/Attendance";

const mapStateToProps = (state) => ({
    club: state.club,
    stats: state.stats
});

// Remove this for shorthand notation
const mapDispatchToProps = (dispatch) => ({
    onWinnerClick (year, quarter) {
        dispatch(pickWinner(year, quarter))
    }
});

// Uses shorthand notation for mapDispatchToProps
//const QuarterlyAttendance = connect(mapStateToProps, { onWinnerClick: pickWinner })(Attendance);

const QuarterlyAttendance = connect(mapStateToProps, mapDispatchToProps)(Attendance);

export default QuarterlyAttendance
