import { attendance } from "../attendance";

// The "metadata" represennts the data file (json) itself. To reload a new file, change its version.
const metadata = (state = attendance.metadata, action) => {
    let newState = state;
    switch (action.type) {
        case 'CHANGE_VERSION':
            newState = Object.assign({}, state, {
                version: action.version
            });
            break;
    }
    return newState;
}

export default metadata
