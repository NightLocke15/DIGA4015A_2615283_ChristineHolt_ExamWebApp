import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

function ChangeUsername() {
    const { usernameChange } = useContext(UserContext);
    const [newUsername, setNewUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function changeUsername(e) {
        e.preventDefault();
        usernameChange(email, password, newUsername);        
    }

    return (
        <form onSubmit={(e) => changeUsername(e)}>            
            <label>Email Address:
                <input type="text"
                placeholder="Enter Email Address..."
                onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>Password:
                <input type="text"
                placeholder="Enter Password..."
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>New Username:
                <input type="text"
                placeholder="Enter New Username..."
                onChange={(e) => setNewUsername(e.target.value)}
                />
            </label>
            <p></p>
            <button type="submit">Submit</button>
        </form>        
    )
}

export default ChangeUsername;