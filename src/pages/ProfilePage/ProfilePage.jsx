import React from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

// trying axios and useEffect hook instead of ComponentDidMount
// const ProfilePage = (props) => {
//   const [profile, setProfile] = useState();

//   useEffect(() => {
//     console.log("Here in useEffect");
//     axios.get("http://localhost:3001/profile").then((res) => {
//       setProfile(res.data);
//       console.log("res", res);
//     });
//   }, []);

//   console.log(profile);

//   return (
//     const { tournaments } = this.state;
//     <main className="ProfilePage">
//       <nav>
//         <h3>PROFILE PAGE - TOURNAMENTS MANAGED BY YOU</h3>
//         <table border="1">
//           <thead>
//             <th>Tournament name</th>
//             <th>Tournament dates</th>
//             <th>Teams</th>
//             <th>Actions</th>
//           </thead>
//           <tbody>
//             {tournaments &&
//               tournaments.map(({ tname, tdate, teams, _id }) => {
//                 return (
//                   <tr path="/all" key={_id}>
//                     <td>
//                       <a href="/update">Update </a>{" "}
//                       <a href="/update">Delete </a>{" "}
//                     </td>
//                     <td>{tname}</td>
//                     <td>{tdate}</td>
//                     {/* <td>{_id}</td> */}
//                     <td>{teams}</td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//       </nav>
//     </main>
//   );
// };

// export default ProfilePage;

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
          <h3>PROFILE PAGE - TOURNAMENTS MANAGED BY YOU</h3>
          <table border="1">
            <thead>
              <th>Action</th>
              <th>Tournament name</th>
              <th>Tournament dates</th>
              <th>Teams</th>
            </thead>
            <tbody>
              {tournaments &&
                tournaments.map(({ tname, tdate, teams, _id }) => {
                  return (
                    <tr path="/all" key={_id}>
                      <td>
                        <a href="/update">Update </a>{" "}
                        <a href="/profile">Delete </a>{" "}
                      </td>
                      <td>{tname}</td>
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
