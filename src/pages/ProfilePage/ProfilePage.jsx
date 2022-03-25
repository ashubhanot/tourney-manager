import { render } from '@testing-library/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';


const ProfilePage = (props) => {
    const [profile, setProfile] = useState()

    useEffect(() => {
        console.log('Here in useEffect')
        axios.get('http://localhost:3001/profile')
        .then(res => {
            setProfile(res.data)
            console.log('res', res)
        });
    }, []);


    console.log(profile)
    
    return(
        <main className='ProfilePage'>
            <nav>
                <h3>PROFILE PAGE</h3>
            </nav>
        </main>
    );
        
    
}

export default ProfilePage;