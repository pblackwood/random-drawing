import React, { PropTypes } from "react";
import EventList from "./EventList";
import * as edit from "react-edit";
import { editEvent } from "../../actions";

const EventEditor = ({club, createEvent, editEvent, commitEditEvent, deleteEvent}) => {

    return (
        <div >
            <h2 >Events</h2>
            <div className="event-list">
                <EventList
                    rows={club.events}
                    columns={columnModel(editEvent, commitEditEvent, deleteEvent)}
                    createEvent={createEvent}
                />
            </div>
        </div>
    )
};

const editable = (editEvent, commitEditEvent) => {
    return edit.edit({
        isEditing: ({columnIndex, rowData}) => columnIndex === rowData.editing,
        onActivate: ({columnIndex, rowData}) => {
            editEvent(rowData.id, columnIndex);
        },
        onValue: ({value, rowData, property}) => {
            commitEditEvent(rowData.id, property, value);
        }
    })
}

const columnModel = (editEvent, commitEditEvent, deleteEvent) => (
    [
        {
            property: 'name',
            header: {
                label: 'What'
            },
            cell: {
                transforms: [
                    editable(editEvent, commitEditEvent)(edit.input())
                ]
            }
        },
        {
            property: 'date',
            header: {
                label: 'When'
            },
            cell: {
                property: 'date'
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
                            onClick={() => deleteEvent(rowData.id)}
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


