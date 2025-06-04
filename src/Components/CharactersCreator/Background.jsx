import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import Spellcasting from "./Spellcasting";
import { DataContext } from "../../Context/DataContext";
import '../../Styles/CreateCharacter.css';
import { ThemeContext } from "../../Context/ThemeContext";

function Background() {
    const { creator, backgroundComplete, setBackgroundComplete, backgroundDesc, setBackgroundDesc, personalityTraits, setPersonalityTraits, ideal, setIdeal, bond, setBond, flaw, setFlaw } = useContext(CharacterContext);
    const { setInfoIndexOne, setInfoIndexTwo, information, description, setInfoURL } = useContext(DataContext);
    const [trait, setTrait] = useState("");
    const {theme} = useContext(ThemeContext);
    const [moreInformation, setMoreInformation] = useState("");
        
    //For new users information
    function moreInfo(info) {
        if (creator === "new") {
            setMoreInformation(info);
        }        
    }

    //taking user to the next section
    function complete(e) {
        e.preventDefault();
        setBackgroundComplete(true);
        console.log(backgroundDesc);
    }

    //Adding the user's traits to their list
    function addTraits() {
        setPersonalityTraits([...personalityTraits, trait]);
        setTrait("");
    }

    return(
        <section>
            {backgroundComplete ? (
                <Spellcasting />
            ) : (
                <form onSubmit={complete} className={theme ? "background-light form" : "background form"}>
                    <h2>Background</h2>
                    {creator === "new" ? (
                    <p  className={theme ? "desc-light" : "desc"}>More Information: {moreInformation}</p>
                    ) : <p></p>}
                    <label htmlFor="background-description">Describe your background:</label>
                    <textarea name="background-description" onChange={(e) => setBackgroundDesc(e.target.value)} onClick={() => moreInfo("Describe where your character comes from, why are they on this adventure.")}></textarea>
                    <ul>
                        {personalityTraits && personalityTraits.map((trait, key) => (
                            <li key={key}>{trait}</li>
                        ))}
                    </ul>
                    <label htmlFor="personality-traits">Add at least two personality traits: </label>
                    <textarea name="personality-traits" value={trait} onChange={(e) => setTrait(e.target.value)} onClick={() => moreInfo("Pick a few personality traits. What is your character like?")}></textarea>
                    <button type="button" onClick={addTraits}>Add</button>
                    <ul>

                    </ul>
                    <label htmlFor="ideals">Describe one ideal: </label>
                    <textarea name="ideals" onChange={(e) => setIdeal(e.target.value)} onClick={() => moreInfo("Pick an ideal. What drives your character? What do they feel strongly about?")}></textarea>
                    <label htmlFor="bonds">Describe one bond: </label>
                    <textarea name="bonds" onChange={(e) => setBond(e.target.value)} onClick={() => moreInfo("Who does your character know in this world? How does this affect their goals.")}></textarea>
                    <label htmlFor="flaws">Describe one flaw: </label>
                    <textarea name="flaws" onChange={(e) => setFlaw(e.target.value)} onClick={() => moreInfo("Your character cannot be perfect. What part of then are less than ideal?")}></textarea>
                    <button type="Submit">Next</button>
                </form>
            )}
        </section>
    )
}

export default Background;