import request from "superagent";
import uuid from "uuid";
import moment from "moment";

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

export const createEvent = () => ({
    type: 'CREATE_EVENT',
    event: {
        id: uuid.v4(),
        name: "New Event",
        location: 1,
        date: moment().format('YYYY-MM-DD'),
        attendees: 0
    }
});

export const editEvent = (id, columnIndex) => ({
    type: 'EDIT_EVENT',
    id,
    columnIndex
});

export const saveEvent = (id, property, value) => ({
    type: 'SAVE_EVENT',
    id,
    property,
    value
});

export const deleteEvent = (id) => ({
    type: 'DELETE_EVENT',
    id
});

