import React from "react";
import Tabs from "../Tabs";
import FileContainer from "../../containers/admin/FileContainer";
import EventContainer from "../../containers/admin/EventContainer";
import LocationContainer from "../../containers/admin/LocationContainer";
import PlayerContainer from "../../containers/admin/PlayerContainer";
import AttendanceContainer from "../../containers/admin/AttendanceContainer";

const Admin = ({view, changeTab}) => {

    const tabData = [
        {
            id: 0,
            name: 'File',
            contents: <FileContainer />
        },
        {
            id: 1,
            name: 'Locations',
            contents: <LocationContainer />
        },
        {
            id: 2,
            name: 'Events',
            contents: <EventContainer />
        },
        {
            id: 3,
            name: 'Players',
            contents: <PlayerContainer />
        },
        {
            id: 4,
            name: 'Attendance',
            contents: <AttendanceContainer />
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

