import React from "react";
import { Link } from "react-router-dom";
// import tournaments from '../../../models/tournaments';
import "./AllTournaments.css";

export default class AllTournaments extends React.Component {
  state = {
    tournaments: [],
  };

  async componentDidMount() {
    try {
      let jwt = localStorage.getItem("token");
      let fetchTournamentsResponse = await fetch("/api/tournaments", {
        headers: { Authorization: "Bearer " + jwt },
      });
      if (!fetchTournamentsResponse.ok)
        throw new Error("Couldn't fetch tournaments");
      let tournaments = await fetchTournamentsResponse.json();
      console.log("This is a", tournaments);

      this.setState({ tournaments: tournaments });
    } catch (err) {
      console.error("ERROR:", err);
    }
  }

  render() {
    const { tournaments } = this.state;
    return (
      <main className="AllPage">
        <div>
          <h3>ALL TOURNAMENTS</h3>
          <table border="1">
            <thead>
              <th>Tournament name</th>
              <th>Tournament dates</th>
              <th>Teams</th>
            </thead>
            <tbody>
              {tournaments &&
                tournaments.map(({ tname, tdate, teams, _id }) => {
                  return (
                    <tr key={_id}>
                      <td>
                        <a href="/tournament/{_id}">{tname}</a>
                      </td>
                      <td>{tdate}</td>
                      {/* <td>{_id}</td> */}
                      <td>{teams}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {/* {tournaments} */}
          {/* {tournaments.length > 0 ?
              tournaments
              :
              <span className="none">No Tournaments Added So Far!</span>
              } */}
        </div>
      </main>
    );
  }
}

//WIP:

// export default function AllTournaments(props) {

//     let tournamentHistoryList = props.tournamentHistory.map( t =>
//         <PrevOrderListItem order={t} />)

//     return (
//          <main className='all'>
//             <nav>
//                 <h3>ALL TOURNAMENTS</h3>
//             </nav>
//             {tournamentHistoryList.length > 0 ?
//             tournamentHistoryList
//             :
//             <span className="none">No Tournaments Added So Far!</span>
//             }
//         </main>
//     )
// }

// {/* <Link to='/all'>All</Link> */}
