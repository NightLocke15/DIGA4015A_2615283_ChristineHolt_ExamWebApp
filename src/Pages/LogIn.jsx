import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import LogInForm from "../Components/LogInForm";
import { Link } from "react-router-dom";
import '../Styles/LogIn.css';

function LogIn() {
    return (
        <section className="main-login-page">
            <h1>LOG IN</h1>
            <LogInForm />
            <p>or</p>
            <p className="create-account"><Link to={'/createaccount'}>Create New Account</Link></p>
        </section>
    )
}

export default LogIn;