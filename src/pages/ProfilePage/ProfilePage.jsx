import React from "react";

export default class AllTournaments extends React.Component {
  state = {
    tournaments: [],
    tname: "",
    teams: "",
    location: "",
    id: "",
  };

  componentDidMount() {
    this.getAllTournaments();
  }

  getAllTournaments = async () => {
    try {
      let jwt = localStorage.getItem("token");
      let fetchTournamentsResponse = await fetch("/api/tournaments", {
        headers: { Authorization: "Bearer " + jwt },
      });
      if (!fetchTournamentsResponse.ok)
        throw new Error("Couldn't fetch tournaments");
      let tournaments = await fetchTournamentsResponse.json();
      // console.log("This is a list of ", tournaments);

      this.setState({ tournaments: tournaments });
      console.log("This is a list of ", tournaments);
    } catch (err) {
      console.error("ERROR:", err);
    }
  };

  handleDelete = async (id) => {
    let jwt = localStorage.getItem("token");
    let fetchTournamentsResponse = await fetch(`/api/tournaments/${id}`, {
      headers: { Authorization: "Bearer " + jwt },
      method: "DELETE",
    });
    if (!fetchTournamentsResponse.ok)
      throw new Error("Couldn't fetch tournaments");
    this.getAllTournaments();
  };

  handleUpdate = async (id) => {
    this.setState({ id });
  };

  onHandleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { id } = this.state;
    console.log(this.state);
    const { tname, teams, location, tdate } = this.state;
    let jwt = localStorage.getItem("token");
    let fetchTournamentsResponse = await fetch(`/api/tournaments/${id}`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + jwt,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tname,
        tdate,
        teams,
        location,
      }),
    });
    if (!fetchTournamentsResponse.ok)
      throw new Error("Couldn't fetch tournaments");
    // let result = await fetchTournamentsResponse.json();
    this.getAllTournaments();
  };

  render() {
    const { tournaments, tname, tdate, teams, location } = this.state;
    return (
      <main className="AllPage">
        <div>
          <h3>PROFILE PAGE - TOURNAMENTS MANAGED BY YOU</h3>
          <table border="1">
            <thead>
              <th>Action</th>
              <th>Tournament name</th>
              <th>Location</th>
              <th>Tournament dates</th>
              <th>Teams</th>
            </thead>
            <tbody>
              {tournaments &&
                tournaments.map(({ tname, location, tdate, teams, _id }) => {
                  return (
                    <tr path="/all" key={_id}>
                      <td>
                        <button onClick={() => this.handleUpdate(_id)}>
                          Update
                        </button>
                        <button onClick={() => this.handleDelete(_id)}>
                          Delete
                        </button>
                      </td>
                      <td>{tname}</td>
                      <td>{location}</td>
                      <td>{tdate}</td>
                      <td>{teams}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <br />
          <form onSubmit={this.handleOnSubmit}>
            <div>
              Team Name:{" "}
              <input
                type="text"
                name="tname"
                value={tname}
                onChange={this.onHandleInputChange}
              />
            </div>
            <div>
              Location:{" "}
              <input
                type="text"
                name="location"
                value={location}
                onChange={this.onHandleInputChange}
              />
            </div>
            <div>
              Teams:{" "}
              <input
                type="text"
                name="teams"
                value={teams}
                onChange={this.onHandleInputChange}
              />
            </div>
            <div>
              Tournament Dates:{" "}
              <input
                type="text"
                name="tdate"
                value={tdate}
                onChange={this.onHandleInputChange}
              />
            </div>
            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}
