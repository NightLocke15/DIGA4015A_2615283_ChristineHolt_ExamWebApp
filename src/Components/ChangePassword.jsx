import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
    const { users, setUsers } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();

    function passwordChange(e) {
        e.preventDefault();
        if (users.some((user) => (user.username === username && user.email === email))) {
            const newUserInfo = users.map((user) => {
                if (user.username === username && user.email === email) {
                    return {
                        ...user,
                        password: newPassword,
                    };
                } 
                else {
                    return user;
                }
            });
            setUsers(newUserInfo);
            console.log(users);
            navigate('/login');
        }
    }

    return (
        <form onSubmit={passwordChange}>
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