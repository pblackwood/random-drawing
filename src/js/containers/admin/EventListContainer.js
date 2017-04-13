import { connect } from "react-redux";
import * as actions from "../../actions";
import EventListEditor from "../../components/admin/EventListEditor";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
    events: {
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
        },
        onColumnClick: (column) => {
            dispatch(actions.changeSort('event', column))
        }
    },
});

const EventListContainer = connect(mapStateToProps, mapDispatchToProps)(EventListEditor);

export default EventListContainer

