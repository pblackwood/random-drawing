import React, { PropTypes } from "react";
import EventListRedux from "./EventListRedux";

const EventEditor = ({club}) => {

    return (
        <div >
            <h2 >Events</h2>
            <div className="event-list">
                <EventListRedux rows={club.events} columns={columnModel()}/>
            </div>
        </div>
    )
};

const columnModel = () => (
    [
        {
            property: 'name',
            header: {
                label: 'What'
            },
            cell: {
                property: 'name'
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


