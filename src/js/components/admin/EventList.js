import React, { PropTypes } from "react";
import * as Table from "reactabular-table";

const EventList = ({events}) => {

    if (events && events.length > 0) {
        return (
            <Table
                rowsCount={events.length}
                rowHeight={30}
                headerHeight={30}
                width={500}
                maxHeight={500}>
                <Column
                    header={<Cell>When</Cell>}
                    width={150}
                    cell={props => (
                        <Cell {...props}>
                            {events[props.rowIndex]['date']}
                        </Cell>
                    )}
                />
                <Column
                    header={<Cell>What</Cell>}
                    width={250}
                    cell={props => (
                        <Cell {...props}>
                            {events[props.rowIndex]['name']}
                        </Cell>
                    )}
                />
                <Column
                    header={<Cell>Attendees</Cell>}
                    width={100}
                    cell={props => (
                        <Cell {...props}>
                            {events[props.rowIndex]['attendees']}
                        </Cell>
                    )}
                />
            </Table>
        )
    }
    else {
        return (
            <div className="events">
                <h4>No events found.</h4>
            </div>
        )
    }
};

export default EventList;
//
// "events": [
//     {
//         "id": 101,
//         "name": "Biddle's Escape from the Ordinary",
//         "locationId": 1,
//         "date": "2016-12-05",
//         "attendees": 0
//     },
//