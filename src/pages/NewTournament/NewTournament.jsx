import React from "react";
import AddTournamentForm from "../../components/AddTournamentForm/AddTournamentForm";

class NewTournament extends React.Component {
  state = {
    tname: "",
    tdate: "",
    teams: "",
  };

  render() {
    return (
      <main className="newTourney">
        <div>
          <h3>CREATE TOURNAMENT</h3>
          <AddTournamentForm userId={this.props.useridvalue._id} />
        </div>
      </main>
    );
  }
}

export default NewTournament;
