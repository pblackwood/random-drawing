import { connect } from "react-redux";
import * as actions from "../../actions";
import PlayerEditor from "../../components/admin/PlayerEditor";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
    events: {
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
        },
        onColumnClick: (column) => {
            dispatch(actions.changeSort('player', column))
        }
    },
});

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerEditor);

export default PlayerContainer

