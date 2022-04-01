import React from "react";
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
              <th>Location</th>
              <th>Tournament dates</th>
              <th>Teams</th>
            </thead>
            <tbody>
              {tournaments &&
                tournaments.map(({ tname, location, tdate, teams, _id }) => {
                  return (
                    <tr key={_id}>
                      <td>
                        <a href="/tournament/{_id}">{tname}</a>
                      </td>
                      <td>{location}</td>
                      <td>{tdate}</td>
                      <td>{teams}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}
