import { findIndex } from "lodash";

const club = (state = {}, action) => {
    let newState = state;
    let index;
    switch (action.type) {
        case 'RECEIVE_ATTENDANCE_STATS':
            // New JSON has arrived from the API
            newState = Object.assign({}, state, action.attendance.club);
            break;

        case 'CREATE_EVENT':
            newState = Object.assign({}, state, {events: [action.event].concat(state.events)});
            break;

        case 'DELETE_EVENT':
            index = findIndex(state.events, {id: action.id});
            if (index >= 0) {
                newState = Object.assign({}, state, {
                    events: state.events.slice(0, index).concat(state.events.slice(index + 1))
                })
            }
            break;

        case 'EDIT_EVENT':
            index = findIndex(state.events, {id: action.id});
            if (index >= 0) {
                newState = Object.assign({}, state, {
                    events: state.events.slice(0, index)
                        .concat(Object.assign({}, state.events[index], {
                            editing: action.columnIndex
                        }))
                        .concat(state.events.slice(index + 1))
                })
            }
            break;

        case 'SAVE_EVENT':
            index = findIndex(state.events, {id: action.id});
            if (index >= 0) {
                newState = Object.assign({}, state, {
                    events: state.events.slice(0, index)
                        .concat(Object.assign({}, state.events[index], {
                            [action.property]: action.value,
                            editing: false
                        }))
                        .concat(state.events.slice(index + 1))
                })
            }
            break;

        case 'CREATE_LOCATION':
            newState = Object.assign({}, state, {locations: [action.location].concat(state.locations)});
            break;

        case 'DELETE_LOCATION':
            index = findIndex(state.locations, {id: action.id});
            if (index >= 0) {
                newState = Object.assign({}, state, {
                    locations: state.locations.slice(0, index).concat(state.locations.slice(index + 1))
                })
            }
            break;

        case 'EDIT_LOCATION':
            index = findIndex(state.locations, {id: action.id});
            if (index >= 0) {
                newState = Object.assign({}, state, {
                    locations: state.locations.slice(0, index)
                        .concat(Object.assign({}, state.locations[index], {
                            editing: action.columnIndex
                        }))
                        .concat(state.locations.slice(index + 1))
                })
            }
            break;

        case 'SAVE_LOCATION':
            index = findIndex(state.locations, {id: action.id});
            if (index >= 0) {
                newState = Object.assign({}, state, {
                    locations: state.locations.slice(0, index)
                        .concat(Object.assign({}, state.locations[index], {
                            [action.property]: action.value,
                            editing: false
                        }))
                        .concat(state.locations.slice(index + 1))
                })
            }
            break;

    }
    return newState;
}

export default club
