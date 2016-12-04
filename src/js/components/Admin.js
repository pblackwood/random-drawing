import React, { PropTypes } from "react";

const Admin = ({club, metadata, view, stats}) => {

    return (
        <div className="attendance row">
            <h2 className="col-xs-12">Hello from Admin</h2>
            <h4 className="col-xs-12">My api version is: {metadata.version}</h4>
        </div>
    )
};

export default Admin;

