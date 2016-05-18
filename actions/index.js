export const pickWinner = (year, quarter) => {
    return {
        type: 'PICK_WINNER',
        year,
        quarter
    }
}

export const changeQuarter = (quarter) => {
    return {
        type: 'CHANGE_QUARTER',
        quarter
    }
}

export const changeYear = (year) => {
    return {
        type: 'CHANGE_YEAR',
        year
    }
}

