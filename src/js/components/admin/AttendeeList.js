import React from "react";
import { orderBy } from "lodash";
import * as Table from "reactabular-table";
import * as sort from "sortabular";

const AttendeeList = ({rows, columns, sortingColumns, activeEvent}) => {

    if (rows && rows.length > 0 && activeEvent) {
        let sortedRows = sort.sorter({
            columns,
            sortingColumns,
            sort: orderBy,
            strategy: sort.strategies.byProperty
        })(rows);

        return (
            <div className="attendance-list">
                <h3>{ activeEvent ? (activeEvent.name + ", " + activeEvent.date + ", " + activeEvent.attendees.length) : ""}</h3>
                <Table.Provider
                    className="pure-table pure-table-striped"
                    columns={columns}>
                    <Table.Header />
                    <Table.Body rows={sortedRows} rowKey="id"/>
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
