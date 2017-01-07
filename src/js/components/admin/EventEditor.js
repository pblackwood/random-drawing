import React, { PropTypes } from "react";
import EventList from "./EventList";
import * as edit from "react-edit";
import { find } from "lodash";

const EventEditor = ({club, editorEvents}) => {

    const editorActions = {
        create: editorEvents.onCreate,
        edit: editorEvents.onEdit,
        save: editorEvents.onSave,
        delete: editorEvents.onDelete,
        selectEvent: editorEvents.onSelectEvent
    }

    const locations = club.locations ? club.locations.map((loc) => ({value: loc.id, name: loc.name})) : []

    return (
        <div className="event-list">
            <EventList
                rows={club.events}
                columns={columnModel(editorActions, locations)}
                createEvent={editorActions.create}
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

const columnModel = (editorActions, locations) => (
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
            property: 'location',
            header: {
                label: 'Where'
            },
            cell: {
                transforms: [
                    editable(editorActions)(edit.dropdown({options: locations}))
                ],
                formatters: [
                    (v) => {
                        let loc = find(locations, {value: v});
                        return loc ? loc.name : v
                    }
                ]
            }
        },
        {
            property: 'attendees',
            header: {
                label: 'How Many'
            },
            cell: {
                formatters: [
                    (value, {rowData}) => (
                        <span>{rowData.attendees.length}</span>
                    )
                ]
            },
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
                            className="attendee"
                            title="Add Attendees"
                            onClick={() => editorActions.selectEvent(rowData.id)}
                            style={{cursor: 'pointer'}}
                        >
                            <i className="fa fa-user-plus"></i>
                        </span>
                    )
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
                            title="Delete Event"
                            onClick={() => editorActions.delete(rowData.id)}
                            style={{cursor: 'pointer'}}
                        >
                            <i className="fa fa-trash"></i>
                        </span>
                    )
                ]
            }
        }
    ]
)

export default EventEditor;


