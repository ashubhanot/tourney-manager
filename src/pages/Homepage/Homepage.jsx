import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import AllTournaments from "../AllTournaments/AllTournaments";

class Homepage extends React.Component {
  // initial state of the app when it first loads
  state = {
    t_name: "",
    organizer: "",
    details: "",
  };

  render() {
    return (
      <main className="Homepage">
        <div>
          <h3>HOMEPAGE</h3>
          <h4>
            Quick links: <br />
            <br />
            <a href="/new">Create Tournament</a>
            <br />
            <br />
            <a href="/all">All Tournaments</a>
          </h4>
          <AllTournaments />
        </div>
      </main>
    );
  }
}

export default Homepage;
