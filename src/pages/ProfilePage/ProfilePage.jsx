import { render } from '@testing-library/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';


const ProfilePage = (props) => {
    const [profile, setProfile] = useState()

    useEffect(() => {
        <NavBar/>
        console.log('Here in useEffect')
        axios.get('http://localhost:3001/profile')
        .then(res => {
            setProfile(res.data)
            console.log('res', res)
        });
    }, []);


    console.log(profile)
    
    return "this profile page loads"
        
    
}

export default ProfilePage;