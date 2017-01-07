import React from "react";
import * as Table from "reactabular-table";

const AttendeeList = ({rows, columns, activeEvent}) => {

    if (rows && rows.length > 0 && activeEvent) {
        return (
            <div >
                <h3>{ activeEvent ? activeEvent.name + ", " + activeEvent.date : "" }</h3>
                <Table.Provider
                    className="pure-table pure-table-striped"
                    columns={columns}>
                    <Table.Header />
                    <Table.Body rows={rows} rowKey="id"/>
                </Table.Provider>
            </div>
        )
    }
    else {
        return (
            <div className="players">
                <h4>No attendees yet.</h4>
            </div>
        )
    }
};

export default AttendeeList;

// At top in place of the <h3>
// <select className="pure-input-1-2 active-event"
//         onSelect={e => {
//             e.preventDefault();
//             selectEvent();
//         }}>
// </select>
