import React from "react";
import Tab from "./Tab";

const Tabs = ({tabs, activeTab, changeTab}) => {
    return (
        <ul className="nav nav-pills">
            {
                tabs.map((tab) => (
                    <Tab tab={tab}
                         key={tab.id}
                         activeTab={activeTab}
                         changeTab={changeTab}
                    />
                ))
            }
        </ul>
    )
}

export default Tabs;
