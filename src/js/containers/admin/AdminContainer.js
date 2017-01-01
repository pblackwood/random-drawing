import { connect } from "react-redux";
import Admin from "../../components/admin/Admin";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    metadata: state.metadata,
    stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
    // onWinnerClick (year, quarter) {
    //     dispatch(pickWinner(year, quarter))
    // }
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer

