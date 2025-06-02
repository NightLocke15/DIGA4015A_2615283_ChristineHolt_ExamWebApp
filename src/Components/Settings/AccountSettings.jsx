import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import ChangePassword from "./ChangePassword";
import ChangeUsername from "./ChangeUsername";
import ChangeEmail from "./ChangeEmail";

function AccountSettings() {
    const { users, currentUser, changing, setChanging } = useContext(UserContext);
    const account = users.filter((user) => user.username === currentUser);

    return (
        <React.Fragment>
            {changing === null ? (
                <section>
                    <article>
                        <p>Email: </p>
                        <p>{account && account[0].email.split("").map(() => "*")}</p>
                        <button onClick={() => setChanging("email")}>Change</button>
                    </article>
                    <article>
                        <p>Username: </p>
                        <p>{account && account[0].username}</p>
                        <button onClick={() => setChanging("username")}>Change</button>
                    </article>
                    <article>
                        <p>Password: </p>
                        <p>{account && account[0].password.split("").map(() => "*")}</p>
                        <button onClick={() => setChanging("password")}>Change</button>
                    </article>
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