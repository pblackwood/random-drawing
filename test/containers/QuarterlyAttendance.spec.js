import expect from "expect";
import QuarterlyAttendance from "../../src/js/containers/QuarterlyAttendance";
import * as actions from "../../src/js/actions/index";
import React, { PropTypes } from "react";
import { Provider } from "react-redux";

describe('Utility Functions', () => {
    let eventData = [
        {
            "id": "a",
            "date": "2016-01-02"
        },
        {
            "id": "b",
            "date": "2016-04-10"
        },
        {
            "id": "c",
            "date": "2017-01-10"
        },
        {
            "id": "d",
            "date": "2017-04-10"
        },
        {
            "id": "e",
            "date": "2017-05-10"
        },
    ]
    let reducer = (state = {}, action) => ( state )
    let store = createStore(reducer);

    let provider =
        <Provider store={store}>
            <QuarterlyAttendance />
        </Provider>
    it('should find events by year and quarter', () => {
        events = qa.findAllEvents(eventData, 2016, 1);
        expect(events.length).toEqual(1);
    })

    // describe('actions', () => {
    it('should create an action to change the year', () => {
        const expectedAction = {
            type: 'CHANGE_YEAR',
            year: 2017
        }
        expect(actions.changeYear(2017)).toEqual(expectedAction)
    })
})

