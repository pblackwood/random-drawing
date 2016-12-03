import React, { PropTypes } from "react";

const Attendance = ({club, stats, onWinnerClick}) => {
    let winners, pickWinners;
    if (stats.pickWinners) {
        pickWinners =
            <div>
                <button onClick={() => onWinnerClick(stats.year, stats.quarter)}>Pick a Winner!</button>
            </div>
    }
    if (stats.winners.length) {
        winners =
            <div className="winner col-xs-8 col-xs-offset-2">
                <h3>Winners for this Quarter: {stats.winners.toString()}</h3>
            </div>
    }

    if (stats.playerList.length > 0) {
        return (
            <div className="attendance row">
                <h4 className="col-xs-12">Total Events Attended (not including organizers): {stats.totalAttendance}</h4>
                <hr className="col-xs-8 col-xs-offset-2"/>
                <div className="playerTable col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                    <table className="p">
                        <tbody>
                        <tr>
                            <th>Player</th>
                            <th>Events Attended</th>
                            </tr>
                        {
                            getSortedPlayerList(stats.playerList).map((player, i) =>
                                <tr key={i}>
                                    <td>{player.name}</td>
                                    <td className="events">{player.events}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <br />
                {pickWinners}
                {winners}
                <br />
            </div>
        )
    }
    else {
        return (
            <div className="attendance">
                <h4>No stats for this period</h4>
            </div>
        )
    }
};

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
    club: PropTypes.shape({
        name: PropTypes.string.isRequired,
        selectedQuarter: PropTypes.number.isRequired,
        selectedYear: PropTypes.number.isRequired
    }).isRequired,
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

