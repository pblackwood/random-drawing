import PlayerList from "./PlayerList";
import React, { PropTypes } from "react";
import * as edit from "react-edit";

const PlayerEditor = ({club, editorEvents}) => {

    const editorActions = {
        create: editorEvents.onCreate,
        edit: editorEvents.onEdit,
        save: editorEvents.onSave,
        delete: editorEvents.onDelete
    }

    return (
        <div className="player-list">
            <PlayerList
                rows={club.players}
                columns={columnModel(editorActions)}
                createPlayer={editorActions.create}
            />
        </div>
    )
};

const editable = (editorActions) => {
    return edit.edit({
        isEditing: ({columnIndex, rowData}) => columnIndex === rowData.editing,
        onActivate: ({columnIndex, rowData}) => {
            editorActions.edit(rowData.id, columnIndex);
        },
        onValue: ({value, rowData, property}) => {
            editorActions.save(rowData.id, property, value);
        }
    })
}

const columnModel = (editorActions) => (
    [
        {
            property: 'first',
            header: {
                label: 'First Name'
            },
            cell: {
                transforms: [
                    editable(editorActions)(edit.input())
                ]
            }
        },
        {
            property: 'last',
            header: {
                label: 'Last Name'
            },
            cell: {
                transforms: [
                    editable(editorActions)(edit.input())
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
                    editable(editorActions)(edit.input())
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
                    editable(editorActions)(edit.input())
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

export default PlayerEditor;


