import React from 'react';
import NavBar from '../../components/NavBar/NavBar';


class NewTournament extends React.Component {

    // initial state of the app when it first loads
    state = {
    t_name: "",
    organizer: "",
    details: "",
    
    
    }

    render() {
        return(
            <main className='newTourney'>
                <div>
                    <h3>CREATE TOURNAMENT</h3>
                </div>
            </main>
        );
    }
}

export default NewTournament;