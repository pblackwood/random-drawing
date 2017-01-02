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
    onCreateEvent () {
        dispatch(actions.createEvent())
    },
    onDeleteEvent (id) {
        dispatch(actions.deleteEvent(id))
    },
    onEditEvent (id, columnIndex) {
        dispatch(actions.editEvent(id, columnIndex))
    },
    onCommitEditEvent (id, property, value) {
        dispatch(actions.commitEditEvent(id, property, value))
    }
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer

