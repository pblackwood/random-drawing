const pickWinner = (state) => {
    return "Billy Bob";
}

const stats = (state, action) => {
    switch (action.type) {
        case 'PICK_WINNER':
            // const winner = pickWinner(state);
            console.log(state);
            // state.winners.push("Billy Bob");
            return state;
        default:
            return state
    }
}

export default stats
