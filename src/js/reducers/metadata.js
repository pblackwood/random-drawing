// The "metadata" represents the data file itself. (json).
const metadata = (state = {}, action) => {
    let newState = state;
    switch (action.type) {
        case 'CHANGE_VERSION':
            newState = Object.assign({}, state, {
                version: action.version
            });
            break;
        case 'RECEIVE_ATTENDANCE_STATS':
            // New JSON has arrived from the API
            newState = Object.assign({}, state, action.attendance.metadata);
            break;
    }
    return newState;
}

export default metadata
