import React from 'react';
import { Link } from 'react-router-dom';



export default function AllTournaments(props) {
    return (
        <div>
            All Tournaments<br />
            <Link to='/all'>All</Link>
        </div>
    )
}