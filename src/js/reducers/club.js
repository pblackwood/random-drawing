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

    }
    return newState;
}

export default club
