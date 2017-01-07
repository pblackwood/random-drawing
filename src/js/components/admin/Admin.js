import React from "react";
import Tabs from "../Tabs";
import EventEditor from "./EventEditor";
import LocationEditor from "./LocationEditor";
import PlayerEditor from "./PlayerEditor";
import AttendanceEditor from "./AttendanceEditor";

const Admin = ({club, view, changeTab, eventEvents, locationEvents, playerEvents, attendanceEvents}) => {

    const tabData = [
        {
            id: 0,
            name: 'Locations',
            contents: <LocationEditor
                club={club}
                editorEvents={locationEvents}
            />
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
            contents: <PlayerEditor
                club={club}
                editorEvents={playerEvents}
            />
        },
        {
            id: 3,
            name: 'Attendance',
            contents: <AttendanceEditor
                club={club}
                view={view}
                editorEvents={attendanceEvents}
            />
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


