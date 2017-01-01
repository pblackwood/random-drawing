import React, { PropTypes } from "react";
import * as Table from "reactabular-table";

const EventListRedux = ({rows, columns}) => {

    if (rows && rows.length > 0) {
        return (
            <div >
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
