import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { ThemeContext } from "../../Context/ThemeContext";

function SpellCastingInfo() {
    const { currentUserCharacters, setCurrentUserCharacters, allCharacters, setAllCharacters } = useContext(CharacterContext);
    const [info, setInfo] = useState("spells");   
       const {theme} = useContext(ThemeContext); 

    function change() {
        if (info === "spells") {
            setInfo("features");
        }
        else if (info === "features"){
            setInfo("spells");
        }
    }

    return (
        <article className={theme ? "spells-list-light":"spells-list"}>
            {info === "spells" ? (
                <React.Fragment>
                    <h3>Spells</h3>
                    <h4>Cantrips</h4>
                    <ul>
                        {currentUserCharacters[0] && currentUserCharacters[0].cantrips.map((spell, key) => (
                            <li key={key}>Name: {spell.name}</li>
                    ))}
                    </ul>
                    <ul>
                    {currentUserCharacters[0] && currentUserCharacters[0].spells.map((spell, key) => (
                            <li key={key}>Name: {spell.name}......Level: {spell.level}</li>
                    ))}
                    </ul>
                    <button onClick={change}>Next</button>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <h3>Features</h3>
                    <ul>
                        {currentUserCharacters[0] && currentUserCharacters[0].features.map((feat, key) => (
                            <li key={key}>Name: {feat.name}</li>
                    ))}
                    </ul>
                    <button onClick={change}>Next</button>
                </React.Fragment>
            )}
        </article>
    )
}

export default SpellCastingInfo;