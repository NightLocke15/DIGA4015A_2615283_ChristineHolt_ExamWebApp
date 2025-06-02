import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function UserProvider({children}) {
    const [users, setUsers] = useState([{
        username: "user",
        email: "user@email",
        password: "password"
    }]);
    const [currentUser, setCurrentUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(() => {
        const Auth = localStorage.getItem("isAuthenticated");
        return Auth === "true";
    })
    const [changing, setChanging] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("isAuthenticated", authenticated);
    }, [authenticated]);

    function login(username, password) {
        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username && password === users[i].password) {
                setAuthenticated(true);
                setCurrentUser(username);
                return true;
            }
            else {
                
            }
        }        
    }

    function create(confirmed, username) {
        if (confirmed) {
            setAuthenticated(true);
            setCurrentUser(username);
            console.log("User has logged in");
            return true;
        }
        else {
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
        setCurrentUser("");
        navigate('/');
    }

    function passwordChange(e, place, username, email, password) {
        if (users.some((user) => (user.username === username && user.email === email))) {    
            const newUserInfo = users.map((user) => {
                if (user.username === username && user.email === email) {  
                    return {
                        ...user,
                        password: password,
                    };                    
                } 
                else {
                    return user;
                }
                
            });
            setUsers(newUserInfo);
            console.log(users);
            if (place === "settings") {
                setChanging(null);
                navigate('/settings');
            }
            else {                
                navigate('/login')
            }
        }
    }

    function usernameChange(email, password, username) {
        if (users.some((user) => (user.email === email && user.password === password))) {    
            const newUserInfo = users.map((user) => {
                if (user.password === password && user.email === email) {  
                    return {
                        ...user,
                        username: username,
                    };                    
                } 
                else {
                    return user;
                }
                
            });
            setUsers(newUserInfo);
            console.log(users);
            setCurrentUser(username);
            setChanging(null);
            navigate('/settings');
        }
    }

    function emailChange(email, password, username) {
        if (users.some((user) => (user.username === username && user.password === password))) {    
            const newUserInfo = users.map((user) => {
                if (user.password === password && user.username === username) {  
                    return {
                        ...user,
                        email: email,
                    };                    
                } 
                else {
                    return user;
                }
                
            });
            setUsers(newUserInfo);
            console.log(users);
            setChanging(null);
            navigate('/settings');
        }
    }

    return (
        <UserContext.Provider value={{ users, setUsers, authenticated, login, logout, currentUser, create, passwordChange, usernameChange, emailChange, changing, setChanging }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;