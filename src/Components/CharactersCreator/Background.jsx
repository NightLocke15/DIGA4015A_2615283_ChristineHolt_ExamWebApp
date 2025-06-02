import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import Spellcasting from "./Spellcasting";
import { DataContext } from "../../Context/DataContext";

function Background() {
    const { backgroundComplete, setBackgroundComplete, } = useContext(CharacterContext);
    const { setInfoIndexOne, setInfoIndexTwo, information, description, setInfoURL } = useContext(DataContext);

    function complete(e) {
        e.preventDefault();
        setBackgroundComplete(true);
    }

    return(
        <section>
            {backgroundComplete ? (
                <Spellcasting />
            ) : (
                <form onSubmit={complete}>
                    <h2>Background</h2>
                    <button type="Submit">Next</button>
                </form>
            )}
        </section>
    )
}

export default Background;