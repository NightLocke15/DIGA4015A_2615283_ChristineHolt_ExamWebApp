import React from "react";
import CreateAccountForm from "../Components/CreateAccountForm";
import { Link } from "react-router-dom";


function CreateProfile() {
    return (
        <section>
            <h1>CREATE AN ACCOUNT</h1>
            <CreateAccountForm />
            <p>Already have an account? <Link to={'/login'}>Log in here.</Link></p>
        </section>       
    )
}

export default CreateProfile;