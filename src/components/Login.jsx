import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
    const [loginactive, setLoginActive] = useState(false);

    const handleClick = () => {
        setLoginActive((curr) => !curr);
    };

    return (
        <div>
            <div className={loginactive ? "cantainer active" : "cantainer"}>
                <div className="curved-shape"></div>
                <div className="curved-shape2"></div>
                <div className="form-box Login">
                    <h2 className="animation">Login</h2>
                    <form className="cc" style={{ width: "100%" }}>
                        <div className="input-box animation">
                            <input type="text" required />
                            <label htmlFor="c">Username</label>
                            <FaUser style={{ color: "red" }} className="Login-icons" />
                        </div>
                        <div className="input-box animation">
                            <input type="text" required />
                            <label htmlFor="hh">Password</label>
                            <FaLock className="Login-icons" />
                        </div>
                        <div className="login-with animation">
                            <div className="additonal-login">
                                <div className="line"></div>
                                <p>Or LogIn</p>
                                <div className="line"></div>
                            </div>
                            <div className="or-login-icons">
                                <button className="login-btn">
                                    <FaGoogle></FaGoogle>
                                </button>
                                <button className="login-btn">
                                    <FaFacebookF className="fb-icon"></FaFacebookF>
                                </button>
                            </div>
                        </div>
                        <div className="input-box animation">
                            <button className="btn" type="submit">
                                Login
                            </button>
                        </div>
                        <div className="regi-link animation">
                            <p>
                                Don't have an account? <br />
                                <a href="#" className={loginactive ? "active" : "SignUpLink"} onClick={handleClick}>
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="info-content Login">
                    <h2 className="animation">Welcome Back!!</h2>
                    <p className="animation">
                        Enter your credentials to log in
                    </p>
                </div>

                {/* sign up form */}
                <div style={!loginactive ? { pointerEvents: "none" } : {}} className="form-box Register ">
                    <h2 className="animation">Sign Up</h2>
                    <form className="df">
                        <div className="input-box animation">
                            <input type="text" required />
                            <label htmlFor="b">Username</label>
                            <FaUser className="Login-icons" />
                        </div>
                        <div className="input-box animation">
                            <input type="email" required />
                            <label htmlFor="b">Email</label>
                            <MdEmail className="Login-icons" />
                        </div>
                        <div className="input-box animation">
                            <input type="text" required />
                            <label for="">Password</label>
                            <FaLock className="Login-icons" />
                        </div>
                        <div className="input-box animation">
                            <button className="btn" type="submit">
                                Register
                            </button>
                        </div>
                        <div className="regi-link animation">
                            <p>
                                Already have an account?{" "} <br />
                                <a href="#" className={loginactive ? "SignInLink" : "active"} onClick={handleClick}>
                                    Log In
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="info-content Register">
                    <h2 className="animation">Welcome Back!!</h2>
                    <p className="animation">
                        Create a new account to get started
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
