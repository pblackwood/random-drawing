import React from "react";
import * as Table from "reactabular-table";

const LocationList = ({rows, columns, createLocation}) => {

    if (rows && rows.length > 0) {
        return (
            <div >
                <button type="button"
                        className="pure-button pure-button-primary location-button"
                        onClick={e => {
                            e.preventDefault();
                            createLocation();
                        }}>
                    Add Location
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
            <div className="locations">
                <h4>No locations found.</h4>
            </div>
        )
    }
};

export default LocationList;
