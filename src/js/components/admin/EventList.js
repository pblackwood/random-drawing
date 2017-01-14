import React from "react";
import { orderBy } from "lodash";
import * as Table from "reactabular-table";
import * as sort from "sortabular";

const EventList = ({rows, columns, sortingColumns, createEvent}) => {

    if (rows && rows.length > 0) {
        let sortedRows = sort.sorter({
            columns,
            sortingColumns,
            sort: orderBy,
            strategy: sort.strategies.byProperty
        })(rows);

        return (
            <div >
                <button type="button"
                        className="pure-button pure-button-primary event-button"
                        onClick={e => {
                            e.preventDefault();
                            createEvent();
                        }}>
                    Add Event
                </button>
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
            <div className="events">
                <h4>No events found.</h4>
            </div>
        )
    }
};

export default EventList;
