import { Component } from "react";

export default class AddTournamentForm extends Component {
  state = {
    tname: "",
    tdate: "",
    teams: "",
    location: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const reqBody = {
        tname: this.state.tname,
        tdate: this.state.tdate,
        teams: this.state.teams,
        location: this.state.location,
        user_id: this.props.userId,
      };

      const url = "/api/tournaments";
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      };

      const newTourneyRes = await fetch(url, options);

      console.log(newTourneyRes);

      if (!newTourneyRes.ok) throw new Error("Fetch Failed - Bad Request");

      const tournament = await newTourneyRes.json();
      this.setState({ error: "Tournament added!" });
    } catch (err) {
      console.log("New Tournament Form error", err);
      this.setState({ error: "Addition of Tournament Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Tournament Name</label>
            <input
              type="text"
              name="tname"
              value={this.state.tname}
              onChange={this.handleChange}
              required
            />
            <label>Dates</label>
            <input
              type="text"
              name="tdate"
              value={this.state.tdate}
              onChange={this.handleChange}
              required
            />
            <label>Teams</label>
            <input
              type="text"
              name="teams"
              value={this.state.teams}
              onChange={this.handleChange}
              required
            />
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
              required
            />

            <button type="submit" disabled={disable}>
              Add Tournament
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
