import { connect } from "react-redux";
import * as actions from "../../actions";
import Admin from "../../components/admin/Admin";

const mapStateToProps = (state) => ({
    view: state.view
});

const mapDispatchToProps = (dispatch) => ({
    changeTab: (id) => {
        dispatch(actions.changeAdminTab(id))
    }
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer

