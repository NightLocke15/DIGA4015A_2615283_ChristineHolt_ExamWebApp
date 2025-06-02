import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import '../Styles/LogIn.css';

//https://ant.design/components/icon
//https://www.youtube.com/watch?v=p5swH9Xqng8

function LogInForm() {
    const { users, authenticated, login} = useContext(UserContext);
    const [passwordVis, setPasswordVis] = useState(false);

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
                <input className="username-input" type="text" onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Username..." />
                <label htmlFor="password">
                    Password:
                </label>
                <div className="password-container">
                    <input className="password-input" type={passwordVis ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password..." />
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