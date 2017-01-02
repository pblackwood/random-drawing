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
        }
    }
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer

