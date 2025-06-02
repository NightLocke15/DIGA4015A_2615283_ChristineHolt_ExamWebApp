import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import '../Styles/NavBar.css';
import ThemeSettings from "./Settings/ThemeSettings";
import { ThemeContext } from "../Context/ThemeContext";

function CheckAuthentication({children}) {
    const { authenticated } = useContext(UserContext);
    return authenticated ? children : null;
}

function NavBar() {
    const location = useLocation();
    const { authenticated } = useContext(UserContext);
    const { setVisibility, visibility } = useContext(ThemeContext);
    const thisLoc = location.pathname;

    function openMenu() {
        console.log("open")
        setVisibility(!visibility)
    }

    //https://pixabay.com/vectors/user-login-enter-icon-person-2935373/
    return (
        <React.Fragment>
            <nav>
                <article className="logo">        
                    <Link to={"/"} style={{textDecoration: "none", color: "white", display: "flex", alignItems: "baseline"}}>     
                    <p className="logo-1">THE</p>
                    <p className="logo-2">CHARACTER COLLECTION</p>  
                    </Link>                 
                </article>
                <article className="links">
                    <CheckAuthentication>
                        <Link to={'/'} className="link" ><p id={thisLoc === "/" ? "thisLocation" : "notThisLocation"}>HOME</p></Link>
                        <Link to={'/create'} className="link" ><p id={thisLoc === "/create" ? "thisLocation" : "notThisLocation"}>CREATE</p></Link>
                        <Link to={'/list'} className="link" ><p id={thisLoc === "/list" ? "thisLocation" : "notThisLocation"}>LIST</p></Link>
                        <Link to={'/rules'} className="link" ><p id={thisLoc === "/rules" ? "thisLocation" : "notThisLocation"}>RULES</p></Link>
                        <Link to={'/about'} className="link" ><p id={thisLoc === "/about" ? "thisLocation" : "notThisLocation"}>ABOUT</p></Link>
                    </CheckAuthentication> 
                </article>   
                <article className="profile">
                    {authenticated ? (
                        <div onClick={openMenu}>
                            <img src="../Styles/Images/profilePictureDefault.png" alt="Avatar" />
                            <p>Username</p>
                        </div>
                    ) : (
                        <div>
                            <img src="../Styles/Images/profilePictureDefault.png" alt="Avatar"/>
                            <Link to={'/login'} style={{textDecoration: "none", color: "white"}}><p>Log In</p></Link>
                        </div>
                    )}
                </article>    
                                
            </nav>
            <ThemeSettings />
        </React.Fragment>
    )
}

export default NavBar;