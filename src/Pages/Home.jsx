import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Home() {
    const { authenticated, currentUser, logout } = useContext(UserContext)
    const navigate = useNavigate();

    function navToLogIn() {
        navigate('/login');
    }

    return(
        <React.Fragment>
            {authenticated ? 
            (<section>
                <h1>WELCOME</h1>   
                <Link to={'/list'}><article>
                    <h3>Character List</h3>
                </article></Link>
                <Link to={'/create'}><article>
                    <h3>Create a Character</h3>
                </article></Link>
                <Link to={'/rules'}><article>
                    <h3>Rules</h3>
                </article></Link>
                <button onClick={logout}>log out</button>          
            </section>) 
            : 
            (<section>
                <h1>WELCOME TO THE CHARACTER COLLECTION</h1>
                <button onClick={navToLogIn}>Log In</button>
                <p>or</p>
                <p><Link to={'/createaccount'}>Create an Account</Link></p>
            </section>)}
        </React.Fragment>
    )
}

export default Home;