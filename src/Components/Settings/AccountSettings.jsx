import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import ChangePassword from "./ChangePassword";
import ChangeUsername from "./ChangeUsername";
import ChangeEmail from "./ChangeEmail";
import { ThemeContext } from "../../Context/ThemeContext";

function AccountSettings() {
    const { setUsers, users, currentUser, changing, setChanging, logout } = useContext(UserContext);
    const { setVisibility } = useContext(ThemeContext);
    const account = users.filter((user) => {
        if (currentUser !== "" || currentUser !== null) {
           return user.username === currentUser;
        }        
    });

    function confirmation (e) {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete your account?")) {
            const newUsers = users.filter((user) => user.username !== currentUser);
            setUsers(newUsers);
            setVisibility(false);
            logout();
        }
        else {
            
        }
    }

    function deleteAccount() {

    }

    return (
        <React.Fragment>
            {changing === null ? (
                <section>
                    <article>
                        <p>Email: </p>
                        <p>{account[0] && account[0].email.split("").map(() => "*")}</p>
                        <button onClick={() => setChanging("email")}>Change</button>
                    </article>
                    <article>
                        <p>Username: </p>
                        <p>{account[0] && account[0].username}</p>
                        <button onClick={() => setChanging("username")}>Change</button>
                    </article>
                    <article>
                        <p>Password: </p>
                        <p>{account[0] && account[0].password.split("").map(() => "*")}</p>
                        <button onClick={() => setChanging("password")}>Change</button>
                    </article>
                    <button onClick={confirmation}>Delete Account</button>
                </section>
            ) : changing === "password" ? (
                <ChangePassword place="settings" />
            ) : changing === "username" ? (
                <ChangeUsername />
            ) : (
                <ChangeEmail />
            )}
        
       </React.Fragment>
    )

}

export default AccountSettings;