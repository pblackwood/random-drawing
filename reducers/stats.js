import {attendance} from "../attendance";

const pickWinner = (stats) => {
    let players = [];
    stats.playerList.forEach(p => {
        for (var i = 0; i < p.events; ++i) {
            players.push(p.name);
        }
    });

    let nums = new Uint32Array(100);
    window.crypto.getRandomValues(nums);
    let index = Math.floor(Math.random() * 101);
    return players[nums[index] % players.length];
}

const stats = (state = getQuarterlyAttendance(2016, 1), action) => {
    let newState = state;
    switch (action.type) {
        case 'PICK_WINNER':
            let winner = pickWinner(state);
            newState = Object.assign({}, state, {winners: [...state.winners, winner]});
            break;
        case 'CHANGE_QUARTER':
            newState = Object.assign({}, getQuarterlyAttendance(state.year, action.quarter));
            break;
        case 'CHANGE_YEAR':
            newState = Object.assign({}, getQuarterlyAttendance(action.year, state.quarter));
            break;
    }
    return newState;
}

const getQuarterlyAttendance = (year, quarter) => {
    let filtered = attendance.stats.filter(s => (s.year === year && s.quarter === quarter));
    return filtered.length > 0 ? filtered[0] : {
        year: year,
        quarter: quarter,
        totalAttendance: 0,
        winners: [],
        playerList: []
    };
}

export default stats
