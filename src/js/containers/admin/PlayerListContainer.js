import { connect } from "react-redux";
import * as actions from "../../actions";
import PlayerListEditor from "../../components/admin/PlayerListEditor";

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

const PlayerListContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerListEditor);

export default PlayerListContainer

