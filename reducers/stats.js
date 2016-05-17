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

const stats = (state = attendance.stats[0], action) => {
    switch (action.type) {
        case 'PICK_WINNER':
            let winner = pickWinner(state);
            let newState = Object.assign({}, state, {winners: [...state.winners, winner]});
            return newState;
        default:
            return state
    }
}

export default stats
