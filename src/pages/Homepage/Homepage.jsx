import React from 'react';
import NavBar from '../../components/NavBar/NavBar';



class Homepage extends React.Component {

    // initial state of the app when it first loads
    state = {
    t_name: "",
    organizer: "",
    details: "",
    
    }

    render() {
        return(
            <main className='Homepage'>
                <div>
                    <h3>HOMEPAGE</h3>
                </div>
            </main>
        );
    }
}

export default Homepage;