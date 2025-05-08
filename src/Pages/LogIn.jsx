import React from "react";

function LogIn() {

    return (
        <React.Fragment>
            <h1>LOG IN</h1>
            <form>
                <label>
                    UserName:
                    <input type="text" />
                </label>
                <label>
                    Password:
                    <input type="text" />
                </label>
            </form>            
        </React.Fragment>
    )
}

export default LogIn;