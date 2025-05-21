import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function CheckAuthentication({children}) {
    const { authenticated } = useContext(UserContext);
    return authenticated ? children : null;
  }

function NavBar() {
    
    return (
        <nav>
            <CheckAuthentication>
                <Link to={'/'}>HOME</Link>
                <Link to={'/create'}>CREATE</Link>
                <Link to={'/list'}>LIST</Link>
                <Link to={'/rules'}>RULES</Link>
                <Link to={'/about'}>ABOUT</Link>
            </CheckAuthentication>            
        </nav>
    )
}

export default NavBar;