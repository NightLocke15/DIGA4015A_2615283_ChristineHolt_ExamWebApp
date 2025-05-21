import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import LogInForm from "../Components/LogInForm";
import { Link } from "react-router-dom";

function LogIn() {
    return (
        <section>
            <h1>LOG IN</h1>
            <LogInForm />
            <p>or</p>
            <p><Link to={'/createaccount'}>Create New Account</Link></p>
        </section>
    )
}

export default LogIn;