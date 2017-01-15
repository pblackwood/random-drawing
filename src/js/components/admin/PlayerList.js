import React from "react";
import { orderBy } from "lodash";
import * as Table from "reactabular-table";
import * as sort from "sortabular";

const PlayerList = ({rows, columns, sortingColumns, createPlayer}) => {

    if (rows && rows.length > 0) {
        let sortedRows = sort.sorter({
            columns,
            sortingColumns,
            sort: orderBy,
            strategy: sort.strategies.byProperty
        })(rows);

        return (
            <div className="player-list">
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
                    <Table.Body rows={sortedRows}
                                rowKey="id"
                                className="player-list-table"
                    />
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
