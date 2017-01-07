export const DEFAULT_YEAR = 2016;
export const DEFAULT_QUARTER = 4;
export const DEFAULT_ADMIN_TAB = 1;

// The "view" represents the user's current settings in the UI.
const view = (state = {
    selectedYear: DEFAULT_YEAR,
    selectedQuarter: DEFAULT_QUARTER,
    activeAdminTab: DEFAULT_ADMIN_TAB,
    activeEvent: {}
}, action) => {
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
        case 'CHANGE_ADMIN_TAB':
            newState = Object.assign({}, state, {
                activeAdminTab: action.id
            });
            break;
        case 'CHANGE_ACTIVE_EVENT':
            newState = Object.assign({}, state, {
                activeEvent: action.id,
                activeAdminTab: 3
            });
            break;
    }
    return newState;
}

export default view
