import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './../../libs/firebase'

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            if (error.code == "auth/invalid-email")
            {
                notify("yo")
            }
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
        // icon: <BiMessageSquareError/>
  
    });



    return (
        <>
        <ToastContainer/>
        <form onSubmit={onHandleSubmit}>
            <div className='top-div'></div>
            <div className='primary-div'>
                <div className='left-div'>
                    <div className='login-form'>
                        <img src="https://i.imgur.com/XEDptHR.jpg" className="jgs-logo-small"/>

                        <div className='login-div'>
                            <div>
                                {/* <label>Email</label> */}
                                <input type="text" placeholder='email@address.com' required onChange={(e)=> setEmail(e.target.value)}/>
                            </div>
                            <div>
                                {/* <label>Password</label> */}
                                <input type="password" placeholder='password' required onChange={(e)=> setPassword(e.target.value)}/>
                            </div>
                            <div>
                                <Link to="/dashboard" class="forgot-password">forgot password</Link>
                            </div>
                            <div>
                                <Link to="/404" class="forgot-password">view 404 page</Link>
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