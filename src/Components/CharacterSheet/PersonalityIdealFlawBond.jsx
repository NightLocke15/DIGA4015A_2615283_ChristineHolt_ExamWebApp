import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { ThemeContext } from "../../Context/ThemeContext";
function PersonalityIdealFlawBond() {
    const { currentUserCharacters, setCurrentUserCharacters, allCharacters, setAllCharacters } = useContext(CharacterContext);
    const [info, setInfo] = useState("personality");
const {theme} = useContext(ThemeContext);
    function change() {
        if (info==="personality") {
            setInfo("ideal");
        }
        else if (info==="ideal") {
            setInfo("flaw");
        }
        else if (info==="flaw") {
            setInfo("bond");
        }
        else if (info==="bond") {
            setInfo("personality");
        }
    }

    return (
        <article className={theme ? "personality-list-light": "personality-list"}>
            {info==="personality" ? (
                <React.Fragment>
                    <h3>Personality</h3>
                    <button onClick={change}>Next</button>
                    {currentUserCharacters[0] && currentUserCharacters[0].personality_traits.map((trait) => (
                        <p>{trait}</p>
                    ))}
                </React.Fragment>                
            ) : info==="ideal" ? (
                <React.Fragment>
                    <h3>Ideal</h3>
                    <button onClick={change}>Next</button>
                    <p>{currentUserCharacters[0] && currentUserCharacters[0].ideal}</p>
                </React.Fragment> 
            ) : info==="flaw" ? (
                <React.Fragment>
                    <h3>Flaw</h3>
                    <button onClick={change}>Next</button>
                    <p>{currentUserCharacters[0] && currentUserCharacters[0].flaw}</p>
                </React.Fragment> 
            ) : (
                <React.Fragment>
                    <h3>Bond</h3>
                    <button onClick={change}>Next</button>
                    <p>{currentUserCharacters[0] && currentUserCharacters[0].bond}</p>
                </React.Fragment> 
            )}
        </article>
    )
}

export default PersonalityIdealFlawBond;