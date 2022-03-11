import React from 'react';
import {AppBar} from '../../components/appbar';
import {SideBar} from '../../components/sidebar';
import {Panels} from '../../components/panels'

function DashboardPage () {
    return (
        <>
        <AppBar/>
        <nav className='flex'>
            <SideBar/>
            <Panels/>
        </nav>
        </>
      );
}

export default DashboardPage;