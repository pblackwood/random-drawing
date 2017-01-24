import React, { PropTypes } from "react";
import * as edit from "react-edit";
import * as sort from "sortabular";
import PlayerList from "./PlayerList";

const PlayerEditor = ({club, view, editorEvents}) => {

    const editorActions = {
        create: editorEvents.onCreate,
        edit: editorEvents.onEdit,
        save: editorEvents.onSave,
        delete: editorEvents.onDelete,
        sort: editorEvents.onColumnClick
    }

    return (
        <div className="player-editor">
            <PlayerList
                rows={club.players}
                columns={columnModel(editorActions, view)}
                sortingColumns={view.playerSortingColumns}
                createPlayer={editorActions.create}
            />
        </div>
    )
};

const columnModel = (editorActions, view) => {
    const editable =
        edit.edit({
            isEditing: ({columnIndex, rowData}) => columnIndex === rowData.editing,
            onActivate: ({columnIndex, rowData}) => {
                editorActions.edit(rowData.id, columnIndex);
            },
            onValue: ({value, rowData, property}) => {
                editorActions.save(rowData.id, property, value);
            }
        });

    const sortable =
        sort.sort({
            getSortingColumns: () => view.playerSortingColumns,
            onSort: (selectedColumn) => {
                sort.byColumns({
                    sortingColumns: view.playerSortingColumns,
                    selectedColumn
                })
                editorActions.sort(selectedColumn)
            },
            strategy: sort.strategies.byProperty
        });

    return (
        [
            {
                property: 'first',
                header: {
                    label: 'First Name',
                    transforms: [
                        sortable
                    ]
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'last',
                header: {
                    label: 'Last Name',
                    transforms: [
                        sortable
                    ]
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'email',
                header: {
                    label: 'Email'
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'phone',
                header: {
                    label: 'Phone'
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'organizer',
                header: {
                    label: 'Org?'
                },
                cell: {
                    formatters: [
                        (value, {rowData}) => {
                            return (
                                <span className="organizer">
                                <i className={value ? "check fa fa-check" : ""}></i>
                            </span>
                            )
                        }
                    ]
                }
            },
            {
                props: {
                    style: {
                        width: 25
                    }
                },
                cell: {
                    formatters: [
                        (value, {rowData}) => (
                            <span
                                className="remove"
                                title="Delete Player"
                                onClick={() => editorActions.delete(rowData.id)}
                                style={{cursor: 'pointer'}}
                            >
                                &#10008;
                            </span>
                        )
                    ]
                }
            }
        ]
    )
}

export default PlayerEditor;


