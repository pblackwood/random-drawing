import React from "react";

const Tab = ({tab, activeTab, changeTab}) => {
    return (
        <li onClick={ () => changeTab(tab.id) }
            className={ activeTab === tab.id ? "active" : null }>
            <a href="#">{ tab.name }</a>
        </li>
    )
}

export default Tab;
