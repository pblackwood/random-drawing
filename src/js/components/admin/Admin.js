import React, { PropTypes } from "react";
import EventEditor from "./EventEditor";

const Admin = ({club, onCreateEvent, onDeleteEvent}) => {

    return (
        <div className="admin row">
            <div className="events col-xs-6">
                <EventEditor
                    club={club}
                    createEvent={onCreateEvent}
                    deleteEvent={onDeleteEvent}
                />
            </div>
            <div className="attendance col-xs-6">
                <h2>Attendance</h2>
            </div>
        </div>
    )
};

export default Admin;

