import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserProvider({children}) {
    const [users, setUsers] = useState([{
        username: "user",
        email: "user@email",
        password: "password"
    }]);
    const [currentUser, setCurrentUser] = useState("");
    const [authenticated, setAuthenticated] = useState(() => {
        const Auth = localStorage.getItem("isAuthenticated");
        return Auth === "true";
    })

    useEffect(() => {
        localStorage.setItem("isAuthenticated", authenticated);
    }, [authenticated]);

    function login(username, password) {
        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username && password === users[i].password) {
                setAuthenticated(true);
                setCurrentUser(username);
                console.log("User has logged in");
                console.log(users);
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
    }

    return (
        <UserContext.Provider value={{ users, setUsers, authenticated, login, logout, currentUser, create }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;