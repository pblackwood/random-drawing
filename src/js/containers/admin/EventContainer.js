import { connect } from "react-redux";
import * as actions from "../../actions";
import EventEditor from "../../components/admin/EventEditor";

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
    tournamentEvents: {
        onCreate: () => {
            dispatch(actions.createTournament())
        },
        onEdit: (id, columnIndex) => {
            dispatch(actions.editTournament(id, columnIndex))
        },
        onSave: (id, property, value) => {
            dispatch(actions.saveTournament(id, property, value))
        },
        onDelete: (id) => {
            dispatch(actions.deleteTournament(id))
        },
        onColumnClick: (column) => {
            dispatch(actions.changeSort('tournament', column))
        },
        onTogglePlayer: (target, eventId, playerId) => {
            if (target.checked) {
                dispatch(actions.addTournamentPlayer(tournamentId, playerId))
            }
            else {
                dispatch(actions.removeTournamentPlayer(tournamentId, playerId))
            }
        }
    }
});

const EventContainer = connect(mapStateToProps, mapDispatchToProps)(EventEditor);

export default EventContainer

