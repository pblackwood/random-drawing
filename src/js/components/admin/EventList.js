import React, { PropTypes } from "react";
import * as Table from "reactabular-table";

const EventListRedux = ({rows, columns, createEvent, deleteEvent}) => {

    if (rows && rows.length > 0) {
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
                    <Table.Body rows={rows} rowKey="id"/>
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

export default EventListRedux;
