import React from 'react';
import AddTournamentForm from '../../components/AddTournamentForm/AddTournamentForm';


class NewTournament extends React.Component {

    // initial state of the app when it first loads
    state = {
    tname: "",
    tdate: "",
    teams: "",
    
    }

    // componentDidMount() {
    //     console.log(this.props);
    //   }

    render() {
        return(
            <main className='newTourney'>
                <div>
                    <h3>CREATE TOURNAMENT</h3>
                    <AddTournamentForm userId={this.props.useridvalue._id}/>
                </div>
            </main>
        );
    }
}

export default NewTournament;