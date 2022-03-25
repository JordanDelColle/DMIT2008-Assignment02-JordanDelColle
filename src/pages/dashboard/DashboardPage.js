import React, {useState} from 'react';
import {AppBar} from '../../components/appbar';
import {SideBar} from '../../components/sidebar';
import {Panels} from '../../components/panels'

import {useNavigate, Outlet} from 'react-router-dom';
import {auth} from './../../libs/firebase';
import {onAuthStateChanged} from 'firebase/auth';

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