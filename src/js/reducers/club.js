import { findIndex } from "lodash";

const club = (state = {}, action) => {
    let newState = state;
    switch (action.type) {
        case 'RECEIVE_ATTENDANCE_STATS':
            // New JSON has arrived from the API
            newState = Object.assign({}, state, action.attendance.club);
            break;

        case 'CREATE_EVENT':
            newState = Object.assign({}, state, {events: [action.event].concat(state.events)});
            break;

        case 'DELETE_EVENT':
            let index = findIndex(state.events, {id: action.id});
            if (index >= 0) {
                newState = Object.assign({}, state, {
                    events: state.events.slice(0, index).concat(state.events.slice(index + 1))
                })
            }
            break;

        // case 'EDIT_EVENT':
        //     if (index >= 0) {
        //         return editProperty(state, index, {
        //             editing: row.columnIndex
        //         });
        //     }
        //     break;
        //
        // case 'CONFIRM_EDIT':
        //     if (index >= 0) {
        //         return editProperty(state, index, {
        //             [row.property]: row.value,
        //             editing: false
        //         });
        //     }

    }
    return newState;
}

// const editProperty = (rows, index, values) => {
//     const ret = cloneDeep(rows);
//
//     Object.keys(values).forEach(v => {
//         ret[index][v] = values[v];
//     });
//
//     return ret;
// }

export default club
