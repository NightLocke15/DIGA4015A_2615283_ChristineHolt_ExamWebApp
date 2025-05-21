import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function LogInForm() {
    const { users, authenticated, login} = useContext(UserContext);

    //User Data
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    //Navigation
    const navigate = useNavigate();

    //Check whether the user has an account, and log them in if they do
    function handleUserInformation(e) {
        e.preventDefault();
        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username && password === users[i].password) {
                console.log("Yes they have logged in")
                setMessage("");
                login(username, password);
                navigate('/');
            }
            else {
                setMessage("Your username or password is incorrect.")
            }
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={handleUserInformation}>
                <p>{message}</p>
                <label>
                    Username:
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Log In</button>
            </form>            
        </React.Fragment>
    )
}

export default LogInForm;