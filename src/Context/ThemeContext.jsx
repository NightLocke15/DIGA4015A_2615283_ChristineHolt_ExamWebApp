import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(false);
    const [visibility, setVisibility] = useState(false);

    function determineTheme() {
        setTheme(!theme);
        console.log(theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, determineTheme, setVisibility, visibility }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;