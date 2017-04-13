import React from "react";
import Tabs from "../Tabs";
import FileContainer from "../../containers/admin/FileContainer";
import EventListContainer from "../../containers/admin/EventListContainer";
import LocationListContainer from "../../containers/admin/LocationListContainer";
import PlayerListContainer from "../../containers/admin/PlayerListContainer";
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
            contents: <LocationListContainer />
        },
        {
            id: 2,
            name: 'Events',
            contents: <EventListContainer />
        },
        {
            id: 3,
            name: 'Players',
            contents: <PlayerListContainer />
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

