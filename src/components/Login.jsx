import React, { useEffect, useState } from 'react';
import { FaLock, FaUser  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Login = () => {
    const [loginactive, setLoginActive] = useState(false);
    

    const handleClick = () => {
        // setLoginActive(!loginactive);
        
        setLoginActive(curr => !curr);
    }

    useEffect( () => {

    } , [loginactive])

    return (
        <div>
            <div className={loginactive ? 'cantainer active' : 'cantainer'}>
                <div className="curved-shape"></div>
                <div className="curved-shape2"></div>
                <div className="form-box Login">
                    <h2 className='animation'>Login</h2>
                    <form className = "" >
                        <div className="input-box animation">
                            <input type="text" required />
                            <label htmlFor="">Username</label>
                            <FaUser style={{ color: 'red' }} className='Login-icons' />
                        </div>
                        <div className="input-box animation">
                            <input type="text" required />
                            <label htmlFor="">Password</label>
                            <FaLock className='Login-icons' />
                        </div>
                        <div className="input-box animation">
                            <button className='btn' type="submit">Login</button>
                        </div>
                        <div className="regi-link animation">
                            <p>Don't have an account? <br />
                            <button className={loginactive ? 'active' : 'SignUpLink'} onClick={handleClick} >Sign Up</button> </p>
                        </div>
                    </form>
                </div>
                <div className="info-content Login">
                    <h2 className='animation'>Welcome Back!!</h2>
                    <p className='animation'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit molestias deserunt odio quo mollitia! Facere.</p>
                </div>

                {/* sign up form */}
                <div className="form-box Register">
                    <h2 className='animation'>Sign Up</h2>
                    <form className = "">
                        <div className="input-box animation">
                            <input type="text" required />
                            <label for="">Username</label>
                            <FaUser  className='Login-icons' />
                        </div>
                        <div className="input-box animation">
                            <input type="email" required />
                            <label for="">Email</label>
                            <MdEmail className='Login-icons' />
                        </div>
                        <div className="input-box animation">
                            <input type="text" required />
                            <label for="">Password</label>
                            <FaLock className='Login-icons' />
                        </div>
                        <div className="input-box animation">
                            <button className='btn' type="submit">Register</button>
                        </div>
                        <div className="regi-link animation">
                            <p>Already have an account? <button className={loginactive ? 'SignInLink' : 'active'} onClick={handleClick} >Log In</button> </p>
                        </div>
                    </form>
                </div>
                <div className="info-content Register">
                    <h2 className='animation'>Welcome Back!!</h2>
                    <p className='animation'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit molestias deserunt odio quo mollitia! Facere.</p>
                </div>
            </div>
        </div>
    )
}

export default Login;
