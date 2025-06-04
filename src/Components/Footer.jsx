import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Footer() {
    const {theme} = useContext(ThemeContext);
    return (
        <footer className={theme ? "footer-light" : "footer"}>
            <p>This website and content do not in any way represent Wizards of the Coast. This content is completely free
and fan-made to follow the official <a href="https://company.wizards.com/en/legal/fancontentpolicy">Fan Content Policy</a>. Dungeons and Dragons and D&D are copyright of Wizards of the Coast.
Please support the <a href="https://marketplace.dndbeyond.com/">official Wizards of the Coast content.</a></p>
        </footer>
    )
}

export default Footer;