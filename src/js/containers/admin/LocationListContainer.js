import { connect } from "react-redux";
import * as actions from "../../actions";
import LocationListEditor from "../../components/admin/LocationListEditor";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
    events: {
        onCreate: () => {
            dispatch(actions.createLocation())
        },
        onEdit: (id, columnIndex) => {
            dispatch(actions.editLocation(id, columnIndex))
        },
        onSave: (id, property, value) => {
            dispatch(actions.saveLocation(id, property, value))
        },
        onDelete: (id) => {
            dispatch(actions.deleteLocation(id))
        },
        onColumnClick: (column) => {
            dispatch(actions.changeSort('location', column))
        }
    },
});

const LocationListContainer = connect(mapStateToProps, mapDispatchToProps)(LocationListEditor);

export default LocationListContainer

