import axios from 'axios';
import React from 'react';


class TournamentPage extends React.Component {

    // initial state of the app when it first loads
    state = {
    t_name: "",
    organizer: "",
    details: "",
    tournaments: []
    
    }
    
      componentDidMount() {
        axios.get('http://localhost:3001/tournaments')
        .then((res) => {
            this.setState({ tournaments : res.data })
        })
      }
    

    render() {
        console.log(this.state.tournaments)
        return(
            "this tournament page loads"
        );
    }
}

export default TournamentPage;