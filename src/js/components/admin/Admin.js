import React from "react";
import Tabs from "../Tabs";
import EventEditor from "./EventEditor";

const Admin = ({club, view, changeTab, eventEvents}) => {

    const tabData = [
        {
            id: 0,
            name: 'Locations',
            contents: <h1>Locations</h1>
        },
        {
            id: 1,
            name: 'Events',
            contents: <EventEditor
                club={club}
                editorEvents={eventEvents}
            />
        },
        {
            id: 2,
            name: 'Players',
            contents: <h1>Players</h1>
        },
        {
            id: 3,
            name: 'Attendance',
            contents: <h1>Attendance</h1>
        }
    ]

    return (
        <div className="admin">
            <Tabs tabs={tabData}
                  activeTab={view.activeAdminTab}
                  changeTab={changeTab}
            />
            { tabData[view.activeAdminTab].contents }
        </div>
    )
};

export default Admin;


