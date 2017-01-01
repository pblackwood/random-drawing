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

        // case 'DELETE_EVENT':
        //     if (index >= 0) {
        //         return state.slice(0, index).concat(state.slice(index + 1));
        //     }
        //
        // case 'EDIT_EVENT':
        //     if (index >= 0) {
        //         return editProperty(state, index, {
        //             editing: row.columnIndex
        //         });
        //     }
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

export default club
