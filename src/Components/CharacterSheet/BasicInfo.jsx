import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import '../../Styles/CharacterSheet.css';
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";

function BasicInfo() {
    const { currentUserCharacters, setCurrentUserCharacters, allCharacters, setAllCharacters } = useContext(CharacterContext);
    const [adding, setAdding] = useState(false);
    const [xp, setXp] = useState();
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    function addXP() {
        const name = currentUserCharacters[0].name;
        const exp = parseInt(currentUserCharacters[0].experience_points) + parseInt(xp);
        if (adding) {
            const currentCharac = allCharacters.map((char) => {
                if (char.name === name) {
                    setCurrentUserCharacters({...char, experience_points: xp});
                    return {
                        ...char,
                        experience_points: exp,
                    };
                }
                else {
                    return char;
                }
            })
            console.log(xp);
            console.log(currentCharac);
            setAllCharacters(currentCharac);
            setAdding(false);
            navigate('/list');
        }
        else {
            setAdding(true);
        }
    }

    return (
        <article className="basic-Info-container">
            <section className={theme ? "basic-info-data-light" : "basic-info-data"}>
                <div className="basic-info-sect-one">
                    <article className="basic-info name">
                    <p className="character-data">{currentUserCharacters[0] && currentUserCharacters[0].name}</p>
                    <p className="character-heading">Character Name</p>
                    </article>
                    <article className="basic-info class">
                        <p className="character-data">{currentUserCharacters[0] && currentUserCharacters[0].class}</p>
                        <p className="character-heading">Class</p>
                    </article>
                    <article className="basic-info levelNumber">
                        <p className="character-data">{currentUserCharacters[0] && currentUserCharacters[0].level}</p>
                        <p className="character-heading">Level</p>
                    </article>
                    <article className="basic-info background">
                        <p className="character-data">{currentUserCharacters[0] && currentUserCharacters[0].background}</p>
                        <p className="character-heading">Background</p>
                    </article>
                    <article className="basic-info background">
                        <p className="character-data">10</p>
                        <p className="character-heading">Hit Points</p>
                    </article>
                </div>
                <div className="basic-info-sect-two">
                    <article className="basic-info campaign">
                    <p className="character-data">{currentUserCharacters[0] && currentUserCharacters[0].campaign}</p>
                    <p className="character-heading">Campaign Name</p>
                </article>
                <article className="basic-info race">
                    <p className="character-data">{currentUserCharacters[0] && currentUserCharacters[0].race}</p>
                    <p className="character-heading">Race</p>
                </article>
                <article className="basic-info alignment">
                    <p className="character-data">{currentUserCharacters[0] && currentUserCharacters[0].alignment}</p>
                    <p className="character-heading">Character Name</p>
                </article>
                <article className="basic-info experience-points">
                    <p className="character-data">{currentUserCharacters[0] && currentUserCharacters[0].experience_points}</p>
                    <p className="character-heading">Experience Points</p>
                    <input type="number" className={adding ? "visible-add-input" : "invisible-add-input"} onChange={(e) => setXp(e.target.value)}/>
                    <button className="add-button" onClick={addXP}>{adding ? "Complete" : "Add"}</button>
                </article>
                </div>
                
                
            </section>
        </article>
    )
}

export default BasicInfo;