import {attendance} from "../attendance";

const club = (state = attendance.club, action) => {
    let newState = state;
    switch (action.type) {
        case 'CHANGE_QUARTER':
            newState = Object.assign({}, state, {
                selectedQuarter: action.quarter
            });
            break;
        case 'CHANGE_YEAR':
            newState = Object.assign({}, state, {
                selectedYear: action.year
            });
            break;
    }
    return newState;
}

export default club
