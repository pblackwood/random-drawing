export const DEFAULT_YEAR = 2016;
export const DEFAULT_QUARTER = 4;

// The "view" represents the user's current settings in the UI.
const view = (state = {selectedYear: DEFAULT_YEAR, selectedQuarter: DEFAULT_QUARTER}, action) => {
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

export default view
