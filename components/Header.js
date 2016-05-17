import React from "react";

const Header = ({club}) => (
    <div className="header">
        <h1>{club.name}</h1>
        <h3>Quarterly Attendance Awards</h3>
        <h4>For Q{club.selectedQuarter}, {club.selectedYear}</h4>
    </div>
);

export default Header;

// <h3>Quarterly Attendance Awards</h3>
