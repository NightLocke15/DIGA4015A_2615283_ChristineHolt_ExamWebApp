import React from "react";
import CreateAccountForm from "../Components/CreateAccountForm";
import { Link } from "react-router-dom";
import '../Styles/CreateProfile.css';


function CreateProfile() {
    return (
        <section className="main-account-form" style={{marginTop: "5rem"}}>
            <h1>CREATE AN ACCOUNT</h1>
            <CreateAccountForm />
            <p>Already have an account? <Link to={'/login'}>Log in here.</Link></p>
        </section>       
    )
}

export default CreateProfile;