import React from "react";
import Tabs from "../Tabs";
import FileEditor from "./FileEditor";
import EventEditor from "./EventEditor";
import LocationEditor from "./LocationEditor";
import PlayerEditor from "./PlayerEditor";
import AttendanceEditor from "./AttendanceEditor";

const Admin = ({club, view, stats, changeTab, fileEvents, eventEvents, locationEvents, playerEvents, attendanceEvents}) => {

    const tabData = [
        {
            id: 0,
            name: 'File',
            contents: <FileEditor
                club={club}
                stats={stats}
                view={view}
                editorEvents={fileEvents}
            />
        },
        {
            id: 1,
            name: 'Locations',
            contents: <LocationEditor
                club={club}
                view={view}
                editorEvents={locationEvents}
            />
        },
        {
            id: 2,
            name: 'Events',
            contents: <EventEditor
                club={club}
                view={view}
                editorEvents={eventEvents}
            />
        },
        {
            id: 3,
            name: 'Players',
            contents: <PlayerEditor
                club={club}
                view={view}
                editorEvents={playerEvents}
            />
        },
        {
            id: 4,
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


