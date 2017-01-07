import { connect } from "react-redux";
import * as actions from "../../actions";
import Admin from "../../components/admin/Admin";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    metadata: state.metadata,
    stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
    changeTab: (id) => {
        dispatch(actions.changeAdminTab(id))
    },
    eventEvents: {
        onCreate: () => {
            dispatch(actions.createEvent())
        },
        onEdit: (id, columnIndex) => {
            dispatch(actions.editEvent(id, columnIndex))
        },
        onSave: (id, property, value) => {
            dispatch(actions.saveEvent(id, property, value))
        },
        onDelete: (id) => {
            dispatch(actions.deleteEvent(id))
        },
        onSelectEvent: (id) => {
            dispatch(actions.changeActiveEvent(id))
        }
    },
    locationEvents: {
        onCreate: () => {
            dispatch(actions.createLocation())
        },
        onEdit: (id, columnIndex) => {
            dispatch(actions.editLocation(id, columnIndex))
        },
        onSave: (id, property, value) => {
            dispatch(actions.saveLocation(id, property, value))
        },
        onDelete: (id) => {
            dispatch(actions.deleteLocation(id))
        }
    },
    playerEvents: {
        onCreate: () => {
            dispatch(actions.createPlayer())
        },
        onEdit: (id, columnIndex) => {
            dispatch(actions.editPlayer(id, columnIndex))
        },
        onSave: (id, property, value) => {
            dispatch(actions.savePlayer(id, property, value))
        },
        onDelete: (id) => {
            dispatch(actions.deletePlayer(id))
        }
    },
    attendanceEvents: {
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
        }
    }
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer

