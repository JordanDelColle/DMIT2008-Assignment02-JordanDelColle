import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {signInWithEmailAndPassword} from 'firebase/auth'

import {SignInButton} from '../../ui/buttons';

import {auth} from './../../libs/firebase'
import JGSLogo from './../../assets/images/jgs-logo-blue.jpeg'
import JGSLogoAlt from './../../assets/images/jgs-logo-alt.png'

function LoginPage (props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigation = useNavigate()
    function onHandleSubmit(e){
        e.preventDefault();
        console.log(email)
        console.log(password)
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential=>{
            navigation('/dashboard')
        })
        .catch(error=>{
            notify(error)
        })
    }

    const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    return (
        <>
        <ToastContainer/>
        <form onSubmit={onHandleSubmit}>
            <div className='top-div'></div>
            <div className='primary-div'>
                <div className='left-div'>
                    <div className='login-form'>
                        <img src={JGSLogo} className="jgs-logo-small"/>

                        <div className='login-div'>
                            <div>
                                <input type="text" placeholder='email@address.com' required onChange={(e)=> setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <input type="password" placeholder='password' required onChange={(e)=> setPassword(e.target.value)}/>
                            </div>
                            <div className='password-div'>
                                <Link to="/" className="forgot-password">forgot password</Link>
                            </div>
                            <div>
                                <SignInButton className="sign-in-button" type="submit">sign in</SignInButton>
                            </div> 
                        </div>
                    </div>

                </div>
                <div className='right-div'>
                    <div className='logo-div'>
                        <img src={JGSLogoAlt} className="jgs-logo-main"/>
                    </div>
                </div>
            </div>
            <div className='bottom-div'></div>  
        </form>
        </>
      );
}

export default LoginPage;