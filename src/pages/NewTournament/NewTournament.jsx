import React from 'react';


class NewTournament extends React.Component {

    // initial state of the app when it first loads
    state = {
    t_name: "",
    organizer: "",
    details: "",
    
    // lineItems: [ // TEMPORARY: to test checkout. normally the initial cart is []
    //     {qty:2, item: {id:"0",name:"Hamburger", price:5.95, emoji:"🍔", category: "Sandwiches"}},
    //     {qty:2, item: {id:"1",name:"Ice Cream", price:1.95, emoji:"🍨",category: "Desserts"}},
    // ],
    // menuItems: [ // TEMPORARY: normally should be initialized to [] and populated from DB
    //     {id:"0",name:"Hamburger", price:5.95, emoji:"🍔", category: "Sandwiches"},
    //     {id:"1",name:"Ice Cream", price:1.95, emoji:"🍨",category: "Desserts"},
    // ],
    }

    render() {
        return(
            "this new tournament page works"
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