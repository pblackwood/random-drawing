import React, { PropTypes } from "react";
import EventListRedux from "./EventListRedux";

const EventEditor = ({club, createEvent}) => {

    return (
        <div >
            <h2 >Events</h2>
            <div className="event-list">
                <EventListRedux
                    rows={club.events}
                    columns={columnModel()}
                    createEvent={createEvent}
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

const columnModel = () => (
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
        }
    ]
)


export default EventEditor;


