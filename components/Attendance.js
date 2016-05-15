import React, {PropTypes} from "react";

const Attendance = ({state, onWinnerClick}) => (

    <div className="attendance">
        <h4>Year: {state.stats[0].year}</h4>
        <h4>Quarter: {state.stats[0].quarter}</h4>
        <h4>Total Events Attended (not including organizers): {state.stats[0].totalAttendance}</h4>
        <hr />
        <div className="playerTable">
            <table>
                <tbody>
                <tr>
                    <th>Player</th>
                    <th>Events Attended</th>
                </tr>
                {getSortedPlayerList(state.stats[0].playerList).map((player, i) =>
                    <tr key={i}>
                        <td>{player.name}</td>
                        <td className="events">{player.events}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        <br />
        <button onClick={() => onWinnerClick(state.stats[0].year, state.stats[0].quarter)}>Pick a Winner!</button>
        <span className="winner">==></span>
        {state.stats[0].winners.map((winner, i) =>
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

// const Attendance = ({stats, onWinnerClick}) => (
//
//     <div className="attendance">
//         alert("hey")
//         <h4>Year: {stats.year}</h4>
//         <h4>Quarter: {stats.quarter}</h4>
//         <h4>Total Events Attended (not including organizers): {stats.totalAttendance}</h4>
//         <hr />
//         <ul>
//             {stats.playerList.map((player, i) =>
//                 <li key={i}
//                     {...player}>
//                     {player.name} {player.events}
//                 </li>
//             )}
//         </ul>
//         Your Winners!
//         <p>{stats.winners[0]}</p>
//         <p>{stats.winners[1]}</p>
//         <br />
//         <button onClick={() => onWinnerClick(stats.year, stats.quarter)}>Roll 'Em!</button>
//     </div>
// );

// <ul>
//     {stats.winners.map((winner, i) =>
//         <li key={i}>
//             {winner}
//         </li>
//     )}
// </ul>
// Attendance.propTypes = {
//     stats: PropTypes.shape({
//         year: PropTypes.number.isRequired,
//         quarter: PropTypes.number.isRequired,
//         totalAttendance: PropTypes.number.isRequired,
//         winners: PropTypes.arrayOf(PropTypes.string).isRequired,
//         playerList: PropTypes.arrayOf(PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             events: PropTypes.number.isRequired
//         }))
//     }).isRequired,
//     onWinnerClick: PropTypes.func.isRequired
// }

export default Attendance;

