export const pickWinner = (year, quarter) => ({
    type: 'PICK_WINNER',
    year,
    quarter
});

export const changeQuarter = (quarter) => ({
    type: 'CHANGE_QUARTER',
    quarter
});

export const changeYear = (year) => ({
    type: 'CHANGE_YEAR',
    year
});

