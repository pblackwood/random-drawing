import React from "react";
import EventEditor from "./EventEditor";

const Admin = ({club, onCreateEvent, onDeleteEvent, onEditEvent, onCommitEditEvent}) => {

    return (
        <div className="admin row">
            <div className="events col-xs-6">
                <EventEditor
                    club={club}
                    createEvent={onCreateEvent}
                    deleteEvent={onDeleteEvent}
                    editEvent={onEditEvent}
                    commitEditEvent={onCommitEditEvent}
                />
            </div>
            <div className="attendance col-xs-6">
                <h2>Attendance</h2>
            </div>
        </div>
    )
};

export default Admin;

