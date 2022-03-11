import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function LoginPage (props) {

    let navigation = useNavigate()
    function onHandleSubmit(e){
        e.preventDefault();
        navigation('/dashboard')
    }

    return (
        <>
        <form onSubmit={onHandleSubmit}>
            <div className='top-div'></div>
            <div className='primary-div'>
                <div className='left-div'>
                    <div className='login-form'>
                        <img src="https://i.imgur.com/XEDptHR.jpg" className="jgs-logo-small"/>

                        <div className='login-div'>
                            <div>
                                <input type="text" required/>
                            </div>
                            <div>
                                <input type="password" required/>
                            </div>
                            <div>
                                <Link to="/dashboard" class="forgot-password">forgot password</Link>
                            </div>
                            <div>
                                <button type="submit">sign in</button>
                            </div> 
                        </div>
                    </div>

                </div>
                <div className='right-div'>
                    <div className='logo-div'>
                        <img src="https://i.imgur.com/82CZQ5D.png" className="jgs-logo-main"/>
                    </div>
                </div>
            </div>
            <div className='bottom-div'></div>  
        </form>
        </>
      );
}

export default LoginPage;