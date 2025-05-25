import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

//https://stackoverflow.com/questions/68190639/i-want-to-go-though-array-and-check-if-it-matches-with-the-values-or-not-in-reac

function CreateAccountForm() {
    //User Data
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [confirmation, setConfirmation] = useState();

    //Create an account messages
    const [usernameConfirm, setUsernameConfirm] = useState(false);
    const [emailConfirm, setEmailConfirm] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState(false);

    //User Context
    const { users, setUsers, create } = useContext(UserContext)

    const navigate = useNavigate();

    //Checking that the user is using a valid user name
    function handleUsername(e) {
        if (users.some((user) => user.username === e)) {
            setUsernameConfirm(false);
        }
        else {
            setUsernameConfirm(true);
            setUserName(e);
        }        
    }

    //Checking if user is using a valid email
    function handleEmail(e) {
        if (users.some((user) => user.email === e)) {
            setEmailConfirm(false);
        }
        else {
            setEmailConfirm(true);
            setEmailAddress(e);
        }        
    }

    //https://stackabuse.com/bytes/check-if-a-string-contains-numbers-in-javascript/
    //https://www.geeksforgeeks.org/javascript-program-to-check-if-a-string-contains-any-special-character/
    //Setting the password
    function handlePassword(e) {
        if (e.length >= 8 && /\d/.test(e) && /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/.test(e)) {
            setPasswordConfirm(true);
            setPassWord(e);
        } 
        else {
            setPasswordConfirm(false);
        }
        
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
        if (confirmation && usernameConfirm && emailConfirm && passwordConfirm) {
            setUsers(
                [...users, {username: userName, email: emailAddress, password: passWord}]
            )
            create(true, userName);
            console.log(users);
            navigate('/')
             console.log(users);
        }        
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text"
                    placeholder="Choose a Username..." 
                    onChange={(e) => handleUsername(e.target.value)}/>
                </label>
                <p>{usernameConfirm ? "" : "Please enter valid username."}</p>
                <label>
                    Email Address:
                    <input type="text"
                    placeholder="Enter your Email Address..." 
                    onChange={(e) => handleEmail(e.target.value)} />
                </label>
                <p>{emailConfirm ? "" : "Please enter valid or not previously used email."}</p>
                <label>
                    Password:
                    <input type="text"
                    placeholder="Enter a Password..."
                    onChange={(e) => handlePassword(e.target.value)} />
                </label>
                <p>Password should contain at least 8 characters, 1 number and 1 special character.</p>
                <p>{passwordConfirm ? "" : "Please enter valid password."}</p>
                <label>
                    Confirm Password:
                    <input type="text"
                    placeholder="Confirm your Password..."
                    onChange={(e) => handleConfirmation(e.target.value)} />
                </label>
                <p>{confirmation ? "" : "Password does not match."}</p>
                <button type="submit">Create Account</button>
            </form>
        </React.Fragment>
    )
}

export default CreateAccountForm;