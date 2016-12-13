import request from "superagent";

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

export const receiveAttendanceStats = (attendance) => ({
    type: 'RECEIVE_ATTENDANCE_STATS',
    attendance
});

export const requestAttendanceStats = () => (

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    function (dispatch) {
        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.
        // In this case, we return a promise to wait for.
        return request.get('/api/attendance.json')
            .accept('json')
            .then(
                (response) => {
                    // This should work but when deployed onto Pair, body is always undefined
                    // dispatch(receiveAttendanceStats(response.body))
                    dispatch(receiveAttendanceStats(JSON.parse(response.text)))
                },
                (reason) => {
                    console.log("Attendance Stats rejected for reason: " + reason)
                }
            )
    }
);

