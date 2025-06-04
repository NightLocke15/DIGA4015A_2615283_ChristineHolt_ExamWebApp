import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import '../Styles/Home.css';
import { ThemeContext } from "../Context/ThemeContext";


function Home() {
    const { authenticated, currentUser, logout } = useContext(UserContext)
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    function navToLogIn() {
        navigate('/login');
    }

    return(
        <React.Fragment>
            {authenticated ? 
            (
            <React.Fragment>
                <h1 className="heading">WELCOME, {currentUser && currentUser}</h1>
                <section className="card-container">                   
                    <Link to={'/list'} className="card-holder"><article className={theme? "card-light":"card"}>
                        <h3>Character List</h3>
                        <img src="https://cdn.pixabay.com/photo/2024/03/25/15/30/dragon-8654991_960_720.jpg"/>
                    </article></Link>
                    <Link to={'/create'} className="card-holder"><article className={theme? "card-light":"card"}>
                        <h3>Create a Character</h3>
                        <img src="https://cdn.pixabay.com/photo/2024/03/25/15/29/ai-generated-8654985_960_720.jpg"/>
                    </article></Link>
                    <Link to={'/rules'} className="card-holder"><article className={theme? "card-light":"card"}>
                        <h3>Rules</h3>
                        <img src="https://cdn.pixabay.com/photo/2024/06/19/23/18/dragon-8840975_960_720.png"/>
                    </article></Link>
                </section>
            </React.Fragment>) 
            : 
            (<section>
                <p className="heading-1">WELCOME</p>
                <p className="heading-2">TO THE</p>
                <h1 className="heading-main">CHARACTER COLLECTION</h1>
                <p className="app-description">Where you can create and store your Dungeons and Dragons characters!</p>
                <button className="login-button" onClick={navToLogIn}>Log In</button>
                <p>or</p>
                <p className="create-account"><Link to={'/createaccount'}>Create an Account</Link></p>
            </section>)}
        </React.Fragment>
    )
}

export default Home;