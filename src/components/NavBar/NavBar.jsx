import React from 'react'
// import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default class NavBar extends React.Component {

  render(){
    return(
    <nav>
        <Link to ='/'>Home </Link>
        <Link to ='/profile'>Profile </Link>
        <Link to ='/all'>All </Link>
        <Link to ='/new'>Create </Link>
        {/* <Link to ='/' onClick={props.handleLogout}>Logout</Link> */}
        <Link to ='/' >Logout</Link>

        {/* <Link to ='/'>Home</Link>
        <Link to ='/login'>Profile</Link>
        <Link to ='/all'>All</Link> */}
    </nav>
    )
  
};
}
























// function NavBar(props) 

//     {props.user ?
//     <nav>
//         <Link to ='/'>Home</Link>
//         <Link to ='/profile'>Profile</Link>
//         <Link to ='/all'>All</Link>
//         <Link to ='/new'>Create</Link>
//         <Link to ='/' onClick={props.handleLogout}>Logout</Link>



//     </nav>
//     :
//     <nav>
//         <Link to ='/'>Home</Link>
//         <Link to ='/login'>Profile</Link>
//         <Link to ='/all'>All</Link>
//     </nav>;

//   return (
//     <>
//       {props.user}
//     </>
//   );
// };

// export default NavBar;



