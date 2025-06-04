import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import '../Styles/LogIn.css';
import { ThemeContext } from "../Context/ThemeContext";

//
    //Title: Icon
    //Author: Ant Design
    //Date: 4 June 2025
    //Availability: https://ant.design/components/icon
//
//Title: How to create a SHOW/HIDE Password TextField in React JS
    //Author: Koding 101
    //Date: 4 June 2025
    //Availability: https://www.youtube.com/watch?v=p5swH9Xqng8

function LogInForm() {
    const { users, authenticated, login} = useContext(UserContext);
    const [passwordVis, setPasswordVis] = useState(false);
    const {theme} = useContext(ThemeContext);

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
            <form className="login-form" onSubmit={handleUserInformation}>
                <p>{message}</p>
                <label htmlFor="username">
                    Username:                    
                </label>
                <input className={theme ? "username-input-light" : "username-input"} type="text" onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Username..." />
                <label htmlFor="password">
                    Password:
                </label>
                <div className="password-container">
                    <input className={theme ? "password-input-light" : "password-input"} type={passwordVis ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password..." />
                    <div className="password-visibility" onClick={() => setPasswordVis(!passwordVis)}>
                        {passwordVis ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </div>
                </div>                
                <p className="forgot-password"><Link to={'/passwordreset'}>Forgot Password?</Link></p>
                <button type="submit">Log In</button>
            </form>            
        </React.Fragment>
    )
}

export default LogInForm;