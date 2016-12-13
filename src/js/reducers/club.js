const club = (state = {}, action) => {
    let newState = state;
    switch (action.type) {
        case 'RECEIVE_ATTENDANCE_STATS':
            // New JSON has arrived from the API
            newState = Object.assign({}, state, action.attendance.club);
            break;
    }
    return newState;
}

export default club
