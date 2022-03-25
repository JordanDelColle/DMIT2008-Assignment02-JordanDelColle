import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {onAuthStateChanged} from 'firebase/auth'

import {auth} from '../../libs/firebase'
import ErrorImage from './../../assets/images/broken-disc.png'

function PageNotFound (props) {
    const [isUser, setIsUser] = useState(false)
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    })
    return (
        <>
        <div className="error-page">
            <header>
                <h1 className="whoops">Whoops!</h1>
            </header>
            <h2 className="broken-site">You broke the site</h2>
            <img src={ErrorImage}/>
            <nav>
                <ul>
                    <li>
                        {
                            isUser? <Link to="/dashboard" className="return-link">Click here to return to the dashboard</Link> : <Link to="/" className="return-link">Click here to return home</Link>
                        }
                    </li>
                </ul>
            </nav>
        </div>
        </>
      );
}

export default PageNotFound;