import React from 'react';
import './UserLogOut.css';
 

function UserLogOut (props) {
  return (
      <div className='UserLogOut'>
        {/* <div>Name: {this.props.name}</div> */}
        {/* <div>Email: {this.props.email}</div> */}
        <button className="btn-sm" onClick={props.handleLogout}>Logout</button>
      </div>
  );
}

export default UserLogOut;