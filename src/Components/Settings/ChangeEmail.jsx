import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";

function ChangeEmail() {
    const { emailChange } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [password, setPassword] = useState("");

    function changeEmail(e) {
        e.preventDefault();
        emailChange(newEmail, password, username);        
    }

    return (
        <form onSubmit={(e) => changeEmail(e)}>  
            <label>Username:
                <input type="text"
                placeholder="Enter Username..."
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>      
            <label>Password:
                <input type="text"
                placeholder="Enter Password..."
                onChange={(e) => setPassword(e.target.value)}/>
            </label>    
            <label>New Email Address:
                <input type="text"
                placeholder="Enter New Email Address..."
                onChange={(e) => setNewEmail(e.target.value)}/>
            </label>           
            <p></p>
            <button type="submit">Submit</button>
        </form>        
    )
}

export default ChangeEmail;