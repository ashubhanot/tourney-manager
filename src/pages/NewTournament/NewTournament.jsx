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
                <nav>
                    <h3>CREATE TOURNAMENT</h3>
                </nav>
            </main>
            // <>
            //     <nav className="nav">
            //         <Logo />
            //         <CategoryList menuCategories={this.state.menuCategories} />
            //         <UserLogOut name={this.state.name} email={this.state.email}/>
            //     </nav>
            //     <MenuList menuItems={this.state.menuItems} />
            //     <OrderDetail currentOrderId={this.state.currentOrderId} />
            // </>
        );
    }
}

export default NewTournament;