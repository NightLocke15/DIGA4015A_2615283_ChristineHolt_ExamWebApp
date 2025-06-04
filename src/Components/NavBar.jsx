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
    const { authenticated, currentUser } = useContext(UserContext);
    const { setVisibility, visibility, theme } = useContext(ThemeContext);
    const thisLoc = location.pathname;

    function openMenu() {
        console.log("open")
        setVisibility(!visibility)
    }

    return (
        <React.Fragment>
            <nav className={theme ? "nav-light" : "nav-dark"}>
                <article className="logo">        
                    <Link to={"/"} style={theme? {textDecoration: "none", color: "black", display: "flex", alignItems: "baseline"} : {textDecoration: "none", color: "white", display: "flex", alignItems: "baseline"}}>     
                    <p className="logo-1">THE</p>
                    <p className="logo-2">CHARACTER COLLECTION</p>  
                    </Link>                 
                </article>
                <article className="links">
                    <CheckAuthentication>
                        <Link to={'/'} className={theme ? "link-light" : "link"} ><p id={thisLoc === "/" ? "thisLocation" : "notThisLocation"}>HOME</p></Link>
                        <Link to={'/create'} className={theme ? "link-light" : "link"} ><p id={thisLoc === "/create" ? "thisLocation" : "notThisLocation"}>CREATE</p></Link>
                        <Link to={'/list'} className={theme ? "link-light" : "link"} ><p id={thisLoc === "/list" ? "thisLocation" : "notThisLocation"}>LIST</p></Link>
                        <Link to={'/rules'} className={theme ? "link-light" : "link"} ><p id={thisLoc === "/rules" ? "thisLocation" : "notThisLocation"}>RULES</p></Link>
                        <Link to={'/about'} className={theme ? "link-light" : "link"} ><p id={thisLoc === "/about" ? "thisLocation" : "notThisLocation"}>ABOUT</p></Link>
                    </CheckAuthentication> 
                </article>   
                <article className="profile">
                    {authenticated ? (
                        <div onClick={openMenu}>
                            <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png" alt="Avatar" className="avatar"/>
                            <p className="profile-name">{currentUser}</p>
                        </div>
                    ) : (
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png" alt="Avatar" className="avatar"/>
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