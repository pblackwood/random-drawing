import React, { PropTypes } from "react";
import EventList from "./EventList";

const EventEditor = ({club, createEvent, deleteEvent}) => {

    return (
        <div >
            <h2 >Events</h2>
            <div className="event-list">
                <EventList
                    rows={club.events}
                    columns={columnModel(deleteEvent)}
                    createEvent={createEvent}
                    deleteEvent={deleteEvent}
                />
            </div>
        </div>
    )
};

// const editable = edit.edit({
//     isEditing: (columnIndex, rowData) => columnIndex === rowData.editing,
//     onActivate: (columnIndex, rowData) => {
//         this.props.editRow(columnIndex, rowData.id);
//     },
//     onValue: ({value, rowData, property}) => {
//         this.props.confirmEdit(property, value, rowData.id);
//     }
// });

const columnModel = (deleteEvent) => (
    [
        {
            property: 'name',
            header: {
                label: 'What'
            },
            cell: {
                property: 'name'
                // transforms: [editable(edit.input())]
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


