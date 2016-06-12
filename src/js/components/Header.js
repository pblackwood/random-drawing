import React, {PropTypes} from "react";

const Header = ({club, onQuarterChange, onYearChange}) => (
    <div className="header row">
        <h1>{club.name}</h1>
        <h3>Quarterly Attendance Awards</h3>
        <h4 className="stats-year col-xs-12 col-sm-5 col-sm-offset-1 col-md-4 col-md-offset-2">Year:
            <select
                id="year"
                value={club.selectedYear}
                onChange={onYearChange}
            >
                {[2016].map((i) => (
                    <option key={i} value={i}>{i}</option>
                ))}
            </select>
        </h4>
        <h4 className="stats-quarter col-xs-12 col-sm-5 col-md-4">Quarter:
            <select
                id="quarter"
                value={club.selectedQuarter}
                onChange={onQuarterChange}
            >
                {[1, 2, 3, 4].map((i) => (
                    <option key={i} value={i}>Q{i}</option>
                ))}
            </select>
        </h4>
    </div>
);

Header.propTypes = {
    club: PropTypes.shape({
        name: PropTypes.string.isRequired,
        selectedQuarter: PropTypes.number.isRequired,
        selectedYear: PropTypes.number.isRequired
    }).isRequired,
    onQuarterChange: PropTypes.func.isRequired,
    onYearChange: PropTypes.func.isRequired
}

export default Header;

