import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

function ChangePassword(props) {
    const { passwordChange } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const { place } = props;

    function changePassword(e) {
        e.preventDefault();
        if (place === "settings") {
            passwordChange(e, "settings", username, email, newPassword)
        }
        else {
            passwordChange(e, "login", username, email, newPassword)
        }
    }

    return (
        <form onSubmit={(e) => changePassword(e)}>
            <label> Username:
                <input type="text"
                placeholder="Enter Username..."
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>Email Address:
                <input type="text"
                placeholder="Enter Email Address..."
                onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>New Password:
                <input type="text"
                placeholder="Enter New Password..."
                onChange={(e) => setNewPassword(e.target.value)}/>
            </label>
            <p>Password should contain at least 8 characters, 1 number and 1 special character.</p>
            <button type="submit">Submit</button>
        </form>        
    )
}

export default ChangePassword;