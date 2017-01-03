import React, { PropTypes } from "react";
import EventList from "./EventList";
import * as edit from "react-edit";

const EventEditor = ({club, editorEvents}) => {

    const editorActions = {
        create: editorEvents.onCreate,
        edit: editorEvents.onEdit,
        save: editorEvents.onSave,
        delete: editorEvents.onDelete
    }

    return (
        <div className="events col-xs-6">
            <h2 >Events</h2>
            <div className="event-list">
                <EventList
                    rows={club.events}
                    columns={columnModel(editorActions)}
                    createEvent={editorActions.create}
                />
            </div>
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
            property: 'name',
            header: {
                label: 'What'
            },
            cell: {
                transforms: [
                    editable(editorActions)(edit.input())
                ]
            }
        },
        {
            property: 'date',
            header: {
                label: 'When'
            },
            cell: {
                transforms: [
                    editable(editorActions)(edit.input())
                ]
            }
        },
        {
            property: 'attendees',
            header: {
                label: 'How Many'
            },
            cell: {
                property: 'attendees'
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
                            title="Delete Event"
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

export default EventEditor;


