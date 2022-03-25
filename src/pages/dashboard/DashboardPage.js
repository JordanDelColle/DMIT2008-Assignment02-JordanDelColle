import React, {useState} from 'react';
import {useNavigate, Outlet} from 'react-router-dom';

import {onAuthStateChanged} from 'firebase/auth';

import {AppBar} from '../../components/appbar';
import {SideBar} from '../../components/sidebar';
import {auth} from './../../libs/firebase';

function DashboardPage (props) {
    const [isUser, setIsUser] = useState(false)
    const navigation = useNavigate();

    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsUser(true)
        }else{
            setIsUser(false)
            navigation('/')
        }
    })
    if (isUser)
    {
        return (
            <>
            <AppBar/>
            <nav className='flex'>
                <SideBar/>
                <Outlet/>
            </nav>
            </>
          );
    }else{
        return null;
    }

}

export default DashboardPage;