import React from 'react'
import { FaLock , FaUserAlt } from "react-icons/fa";

const Signup = () => {
    return (
        <div className='cantainer'>
            
            <div className="form-box Register">
                <h2 className='animation'>Sign Up</h2>
                <form action="#">
                    <div className="input-box animation">
                        <input type="text" required />
                        <label for="">Username</label>
                        <FaUserAlt className='Login-icons' />
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
                        <p>Don't have an account <a href="#" className='SignInLink'>Sign In</a> </p>
                    </div>
                </form>
            </div>
            <div className="info-content Register">
                <h2 className='animation'>Welcome Back!!</h2>
                <p className='animation'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit molestias deserunt odio quo mollitia! Facere.</p>
            </div>
        </div>
    )
}

export default Signup
