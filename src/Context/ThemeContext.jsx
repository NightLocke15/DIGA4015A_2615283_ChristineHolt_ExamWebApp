import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(false);
    const [visibility, setVisibility] = useState(false);

    function determineTheme() {
        setTheme(!theme);
        console.log(theme)
    }

    useEffect(() => {
        if (theme) {
            document.body.classList.add("light");
        } else {
            document.body.classList.add("dark");
        }

        return () => {
            document.body.classList.remove("light");
            document.body.classList.remove("dark");
        }         
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, determineTheme, setVisibility, visibility }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;