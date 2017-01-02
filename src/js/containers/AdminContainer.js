import { connect } from "react-redux";
import { pickWinner } from "../actions";
import Admin from "../components/Admin";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    metadata: state.metadata,
    stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
    onWinnerClick (year, quarter) {
        dispatch(pickWinner(year, quarter))
    }
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer
