import { connect } from "react-redux";
import * as actions from "../../actions";
import AttendanceEditor from "../../components/admin/AttendanceEditor";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
    events: {
        onTogglePlayer: (target, eventId, playerId) => {
            if (target.checked) {
                dispatch(actions.addPlayerAttendance(eventId, playerId))
            }
            else {
                dispatch(actions.removePlayerAttendance(eventId, playerId))
            }
        },
        onSelectEvent: (id) => {
            dispatch(actions.changeActiveEvent(id))
        },
        onColumnClick: (column) => {
            dispatch(actions.changeSort('attendance', column))
        }
    },
});

const AttendanceContainer = connect(mapStateToProps, mapDispatchToProps)(AttendanceEditor);

export default AttendanceContainer

