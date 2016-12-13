const stats = (state = [], action) => {
    let newState = state;
    switch (action.type) {
        case 'PICK_WINNER':
            // TODO, no longer working after change to stats state
            let winner = pickWinner(state);
            newState = Object.assign([], state, {winners: [...state.winners, winner]});
            break;
        case 'RECEIVE_ATTENDANCE_STATS':
            // New JSON has arrived from the API
            newState = Object.assign([], state, action.attendance.stats);
            break;
    }
    return newState;
}

// TODO, no longer working
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

export default stats
