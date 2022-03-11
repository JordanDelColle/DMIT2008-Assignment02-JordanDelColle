import React from 'react';
import {Link} from "react-router-dom";
import {AppBar} from '../../components/appbar';
import {SideBar} from '../../components/sidebar';
import {Panels} from '../../components/panels'

function DashboardPage () {
    return (
        <>
            <nav>
                {/* <ul>
                    <li>
                        <Link to="/">Sign Out</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard Page</Link>
                    </li>
                </ul> */}
            </nav>
        <AppBar/>
        <nav className='pls'>
            <SideBar/>
            <Panels/>
        </nav>

        </>
      );
}

export default DashboardPage;