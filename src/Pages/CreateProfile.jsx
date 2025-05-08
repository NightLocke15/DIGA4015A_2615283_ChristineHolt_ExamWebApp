import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

//https://stackoverflow.com/questions/68190639/i-want-to-go-though-array-and-check-if-it-matches-with-the-values-or-not-in-reac

function CreateProfile() {
    //User Data
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [confirmation, setConfirmation] = useState();

    //Create an account messages
    const [userNameMessage, setUserNameMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

    //User Context
    const { users, setUsers } = useContext(UserContext)

    //Checking that the user is using a valid user name
    function handleUsername(e) {
        if (users.some((user) => user.username === e)) {
            setUserNameMessage("Username not available");
        }
        else if (e === "") {
            setUserNameMessage("");
        }
        else {
            setUserNameMessage("Username okay");
            setUserName(e);
        }        
    }

    //Checking if user is using a valid email
    function handleEmail(e) {
        if (users.some((user) => user.email === e)) {
            console.log("this email already has an account")
        }
        else {
            setEmailAddress(e);
        }        
    }

    //Setting the password
    function handlePassword(e) {
        setPassWord(e);
    }

    //Confirming the password is the same
    function handleConfirmation(e) {
        if (e === passWord) {
            setConfirmation(true);
        }
        else 
        {
            setConfirmation(false);
        }
    }

    //Submitting the data to the list of users
    function handleSubmit(e) {
        e.preventDefault();
        if (confirmation === true) {
            setUsers(
                [...users, {username: userName, email: emailAddress, password: passWord}]
            )
            console.log(users);
        }        
    }

    return (
        <React.Fragment>
            <h1>CREATE AN ACCOUNT</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text"
                    placeholder="Choose a Username..." 
                    onChange={(e) => handleUsername(e.target.value)}/>
                </label>
                <p>{userNameMessage}</p>
                <label>
                    Email Address:
                    <input type="text"
                    placeholder="Enter your Email Address..." 
                    onChange={(e) => handleEmail(e.target.value)} />
                </label>
                <p>{emailMessage}</p>
                <label>
                    Password:
                    <input type="text"
                    placeholder="Enter a Password..."
                    onChange={(e) => handlePassword(e.target.value)} />
                </label>
                <p>{passwordMessage}</p>
                <label>
                    Confirm Password:
                    <input type="text"
                    placeholder="Confirm your Password..."
                    onChange={(e) => handleConfirmation(e.target.value)} />
                </label>
                <p>{confirmPasswordMessage}</p>
                <button type="submit">Create Account</button>
            </form>
        </React.Fragment>
    )
}

export default CreateProfile;