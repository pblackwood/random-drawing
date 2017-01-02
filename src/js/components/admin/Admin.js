import React from "react";
import EventEditor from "./EventEditor";

const Admin = ({club, eventEvents}) => {

    const editorActions = {
        create: eventEvents.onCreate,
        edit: eventEvents.onEdit,
        save: eventEvents.onSave,
        delete: eventEvents.onDelete
    }

    return (
        <div className="admin row">
            <div className="events col-xs-6">
                <EventEditor
                    club={club}
                    editorActions={editorActions}
                />
            </div>
            <div className="attendance col-xs-6">
                <h2>Attendance</h2>
            </div>
        </div>
    )
};

export default Admin;

