import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserContext } from "../../Context/UserContext";
import '../../Styles/ThemeSettings.css';
import { useNavigate } from "react-router-dom";

function ThemeSettings() {
    const { determineTheme, theme, visibility, setVisibility } = useContext(ThemeContext);
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    function logOutFunc () {
        setVisibility(false);
        logout();
    }

    return (
        <section className={visibility ? "visible-menu" : "hidden-menu"}>
            
            <article className="buttons">
                <h3>Theme</h3>
                <button className= {theme ? "button theme light" : "button theme dark"} onClick={determineTheme}>Change To {theme ? "Dark" : "Light"}</button>
                <h3>Other</h3>
                <button className= {theme ? "button account light" : "button account dark"} onClick={() => navigate("/settings")}>Account Settings</button>
                <button className= {theme ? "button logout light" : "button logout dark"} onClick={logOutFunc} >Log Out</button>
            </article>            
        </section>
    )
}

export default ThemeSettings;