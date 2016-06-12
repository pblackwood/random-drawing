import {connect} from "react-redux";
import {pickWinner} from "../actions";
import Attendance from "../components/Attendance";

const mapStateToProps = (state) => ({
    club: state.club,
    stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
    onWinnerClick (year, quarter) {
        dispatch(pickWinner(year, quarter))
    }
});

const QuarterlyAttendance = connect(mapStateToProps, mapDispatchToProps)(Attendance);

export default QuarterlyAttendance
