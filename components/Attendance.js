import React, {PropTypes} from "react";

const Attendance = ({stats, onWinnerClick}) => (

    <div className="attendance">
        <h4>Year: {stats.year}</h4>
        <h4>Quarter: {stats.quarter}</h4>
        <h4>Total Events Attended (not including organizers): {stats.totalAttendance}</h4>
        <hr />
        <div className="playerTable">
            <table>
                <tbody>
                <tr>
                    <th>Player</th>
                    <th>Events Attended</th>
                </tr>
                {getSortedPlayerList(stats.playerList).map((player, i) =>
                    <tr key={i}>
                        <td>{player.name}</td>
                        <td className="events">{player.events}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        <br />
        <button onClick={() => onWinnerClick(stats.year, stats.quarter)}>Pick a Winner!</button>
        <span className="winner">==></span>
        {stats.winners.map((winner, i) =>
            <span className="winner" key={i}>{winner}</span>
        )}
        <br />
    </div>
);

const getSortedPlayerList = (playerList) => {
    return playerList.sort((p1, p2) => {
        let result = p2.events - p1.events;
        if (result == 0) {
            return p1.name.localeCompare(p2.name);
        }
        else {
            return result;
        }
    });
};


Attendance.propTypes = {
    stats: PropTypes.shape({
        year: PropTypes.number.isRequired,
        quarter: PropTypes.number.isRequired,
        totalAttendance: PropTypes.number.isRequired,
        winners: PropTypes.arrayOf(PropTypes.string).isRequired,
        playerList: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            events: PropTypes.number.isRequired
        }))
    }).isRequired,
    onWinnerClick: PropTypes.func.isRequired
}

export default Attendance;

