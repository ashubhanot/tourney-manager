import React from 'react'
// import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';



const NavBar = (props) => {
    return(
      <nav className='NavBarLinks'>
          <Link to ='/'>Home </Link>
          <Link to ='/profile'>{props.user.name}'s Profile </Link>
          <Link to ='/all'>All </Link>
          <Link to ='/new'>Create </Link>
          <Link to ='/' onClick={props.handleLogout}>Logout</Link>

      </nav>
    )
  
};

export default NavBar

























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



