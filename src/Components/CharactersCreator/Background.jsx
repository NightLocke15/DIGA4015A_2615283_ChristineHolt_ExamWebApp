import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import Spellcasting from "./Spellcasting";
import { DataContext } from "../../Context/DataContext";

function Background() {
    const { backgroundComplete, setBackgroundComplete, backgroundDesc, setBackgroundDesc, personalityTraits, setPersonalityTraits, ideal, setIdeal, bond, setBond, flaw, setFlaw } = useContext(CharacterContext);
    const { setInfoIndexOne, setInfoIndexTwo, information, description, setInfoURL } = useContext(DataContext);
    const [trait, setTrait] = useState("");

    function complete(e) {
        e.preventDefault();
        setBackgroundComplete(true);
        console.log(backgroundDesc);
    }

    function addTraits() {
        setPersonalityTraits([...personalityTraits, trait]);
        setTrait("");
    }

    return(
        <section>
            {backgroundComplete ? (
                <Spellcasting />
            ) : (
                <form onSubmit={complete}>
                    <h2>Background</h2>
                    <label htmlFor="background-description">Describe your background:</label>
                    <textarea name="background-description" onChange={(e) => setBackgroundDesc(e.target.value)}></textarea>
                    <ul>
                        {personalityTraits && personalityTraits.map((trait, key) => (
                            <li key={key}>{trait}</li>
                        ))}
                    </ul>
                    <label htmlFor="personality-traits">Add at least two personality traits: </label>
                    <textarea name="personality-traits" value={trait} onChange={(e) => setTrait(e.target.value)}></textarea>
                    <button type="button" onClick={addTraits}>Add</button>
                    <ul>

                    </ul>
                    <label htmlFor="ideals">Describe one ideal: </label>
                    <textarea name="ideals" onChange={(e) => setIdeal(e.target.value)}></textarea>
                    <label htmlFor="bonds">Describe one bond: </label>
                    <textarea name="bonds" onChange={(e) => setBond(e.target.value)}></textarea>
                    <label htmlFor="flaws">Describe one flaw: </label>
                    <textarea name="flaws" onChange={(e) => setFlaw(e.target.value)}></textarea>
                    <button type="Submit">Next</button>
                </form>
            )}
        </section>
    )
}

export default Background;