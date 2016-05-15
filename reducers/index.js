const drawingApp = (state, action) => {
    switch (action.type) {
        case 'PICK_WINNER':
            const winner = pickWinner(state.stats[0]);
            // state.stats[0].winners = Object.assign([], state.stats[0].winners);
            state.stats[0].winners.push(winner);
            return Object.assign({}, state);
        // console.log(state.stats[0]);
        // state.winners.push("Billy Bob");
        // return state;
        default:
            return state
    }
}

const pickWinner = (stats) => {
    let players = [];
    stats.playerList.forEach(p => {
        for (var i = 0; i < p.events; ++i) {
            players.push(p.name);
        }
    });
    // console.log(players.length);
    var nums = new Uint32Array(100);
    window.crypto.getRandomValues(nums);
    var index = Math.floor(Math.random() * 101);
    // console.log("Your lucky number: " + array[index] % players.length);
    return players[nums[index] % players.length];

    // console.log("Your lucky numbers:");
    // for (var i = 0; i < array.length; i++) {
    //     console.log(array[i], array[i] % players.length);
    // }

    // console.log("Your lucky number: " + Math.floor(Math.random() * (players.length + 1)));
}

export default drawingApp
