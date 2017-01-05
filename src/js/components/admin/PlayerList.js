import React from "react";
import * as Table from "reactabular-table";

const PlayerList = ({rows, columns, createPlayer}) => {

    if (rows && rows.length > 0) {
        return (
            <div >
                <button type="button"
                        className="pure-button pure-button-primary player-button"
                        onClick={e => {
                            e.preventDefault();
                            createPlayer();
                        }}>
                    Add Player
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
            <div className="players">
                <h4>No players found.</h4>
            </div>
        )
    }
};

export default PlayerList;
