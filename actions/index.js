export const pickWinner = (year, quarter) => {
    return {
        type: 'PICK_WINNER',
        year,
        quarter
    }
}

