import { omit } from "lodash";

export const DEFAULT_YEAR = 2017;
export const DEFAULT_QUARTER = 1;
export const DEFAULT_ADMIN_TAB = 2;
export const DEFAULT_JSON_FILE_PATH = '~/Google Drive/Backgammon/Steel City';
export const DEFAULT_JSON_FILE_NAME = 'attendance.json';

// The "view" represents the user's current settings in the UI.
const view = (state = {
    selectedYear: DEFAULT_YEAR,
    selectedQuarter: DEFAULT_QUARTER,
    activeAdminTab: DEFAULT_ADMIN_TAB,
    activeEvent: {},
    eventSortingColumns: {
        'name': {
            direction: 'asc',
            position: 0
        }
    },
    locationSortingColumns: {
        'name': {
            direction: 'asc',
            position: 0
        }
    },
    jsonFilePath: DEFAULT_JSON_FILE_PATH,
    jsonFileName: DEFAULT_JSON_FILE_NAME
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
                activeAdminTab: 4
            });
            break;
        case 'EDIT_JSON_FILE_PATH':
            newState = Object.assign({}, state, {
                jsonFilePath: action.path
            });
            break;
        case 'EDIT_JSON_FILE_NAME':
            newState = Object.assign({}, state, {
                jsonFileName: action.name
            });
            break;
        case 'CHANGE_SORT':
            newState = sortReducers[action.editor](state, action.column);
            break;
    }
    return newState;
}

const sortReducers = {
    'events': (state, column) => (changeSort('eventSortingColumns', state, column)),
    'locations': (state, column) => (changeSort('locationSortingColumns', state, column))
}

const changeSort = (sortingColumnName, state, column) => {
    let sortingColumns = state[sortingColumnName];
    let col = sortingColumns[column];
    if (col) {
        let newCols = omit(sortingColumns, column);
        if (col.direction === 'asc') {
            newCols[column] = {
                direction: 'desc',
                position: col.position
            }
        }
        return Object.assign({}, state, {
            [sortingColumnName]: newCols
        });
    }
    else {
        col = {
            direction: 'asc',
            position: getNextSortPosition(sortingColumns)
        }
        return Object.assign({}, state, {
            [sortingColumnName]: Object.assign({}, sortingColumns, {
                [column]: col
            })
        });
    }
}

const getNextSortPosition = (sortingColumns) => {
    let maxPos = 0, colName = null;
    for (colName in sortingColumns) {
        let col = sortingColumns[colName];
        maxPos = Math.max(maxPos, col.position)
    }
    return maxPos + 1;
}

export default view
