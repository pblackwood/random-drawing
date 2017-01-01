import { connect } from "react-redux";
import { createEvent } from "../../actions";
import Admin from "../../components/admin/Admin";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    metadata: state.metadata,
    stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
    onCreateEvent () {
        dispatch(createEvent())
    }
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer

