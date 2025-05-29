import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { DataContext } from "../../Context/DataContext";
import { UserContext } from "../../Context/UserContext";

function Race() {
    const races = [
        {
            id: "none",
            name: "Choose One"
        },
        {
            id: "dragonborn",
            name: "DragonBorn"
        },
        {
            id: "dwarf",
            name: "Dwarf"
        },
        {
            id: "elf",
            name: "Elf"
        },
        {
            id: "gnome",
            name: "Gnome"
        },
        {
            id: "half-elf",
            name: "Half Elf"
        },
        {
            id: "half-orc",
            name: "Half Orc"
        },
        {
            id: "halfling",
            name: "Halfling"
        },
        {
            id: "human",
            name: "Human"
        },
        {
            id: "tiefling",
            name: "Tiefling"
        },
    ]
    const alignments = [
        "Choose One", "Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "True Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"
    ]
    const [raceOption, setRaceOption] = useState("none");
    const [alignment, setAlignment] = useState("");
    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [profOption, setProfOption] = useState("");
    const { setCurrentCharacter, currentCharacter } = useContext(CharacterContext);
    const { setInfoIndexOne, setInfoIndexTwo, information, description, setInfoURL } = useContext(DataContext);
    const { currentUser } = useContext(UserContext);

    function selectRace(e) {
        setInfoIndexOne("races/");
        setInfoIndexTwo(e);
        setRaceOption(e);
    }

    function moreInfo(e) {
        setInfoURL(e);
    }

    function setData(e) {
        e.preventDefault();
        //Find way to add all of this at the end of the character creation instead, maybe sacing each part in context and adding it at the end
        setCurrentCharacter({
            user: currentUser,
            race: raceOption,
            ability_score_increase: information.ability_bonuses,
            alignment: alignment,
            age: age,
            height: height,
            starting_proficiencies: information.starting_proficiencies,
            proficiency_options: profOption,
            languages: information.languages,
            traits: information.traits,
        });
        console.log(currentCharacter);
    }

    return (
        <React.Fragment>
            <form onSubmit={setData}>
                <label htmlFor="races">Choose a race: </label>
                <select id="races" onChange={(e) => selectRace(e.target.value)} defaultValue="none" required>
                    {races.map((race) => (
                        <option value={race.id} key={race.id}>{race.name}</option>
                    ))}
                </select>   
                {raceOption === "none" ? (<section></section>) : (
                    <section> 
                        <p>{description.desc}</p>
                        <p>Ability Score Increase:</p>
                        {information.ability_bonuses && information.ability_bonuses.map((bonus, key) => (
                            <p key={key}>{bonus.ability_score.name} +{bonus.bonus}</p>
                        ))}
                        <p>Alignment: {information.alignment}</p>
                        <label htmlFor="alignments">Choose an alignment: </label>
                        <select id="alignments" onChange={(e) => setAlignment(e.target.value)}>
                            {alignments.map((align, key) => (
                                <option value={align} key={key}>{align}</option>
                            ))}
                        </select>
                        <p>Age: {information.age}</p>
                        <label>How old is your character?
                            <input type="text"/>
                        </label>
                        <p>Size: {information.size_description}</p>
                        <label>How tall are you?
                            <input type="text" />ft
                        </label>
                        {information.starting_proficiencies && information.starting_proficiencies.length === 0 ? (<p></p>) : (
                            <div>
                                <p>Starting Proficiencies: </p>
                                {information.starting_proficiencies && information.starting_proficiencies.map((prof) => (
                                    <div key={prof.index}>
                                        <p>{prof.name}</p>
                                    </div>                
                                ))}
                            </div>
                        )}
                        {information.starting_proficiency_options ? (
                            <div>
                                <p>Options:</p>
                                <p>{information.starting_proficiency_options.desc} Choose one:</p>
                                <select id="tool-options" onChange={(e) => setProfOption(e.target.value)}>
                                    {information.starting_proficiency_options.from.options.map((option, key) => (
                                        <option value={option.item.index} key={key}>{option.item.name}</option>
                                    ))}
                                </select>
                            </div>
                        ) : (<p></p>)}
                        <p>Languages: {information.language_desc}</p>
                        <p>Traits: </p>
                        {Array.isArray(information.traits) ? (
                            <div>
                                {information.traits && information.traits.map((trait) => (
                                    <div key={trait.index}>
                                        <p>{trait.name}</p>
                                        <button onClick={() => moreInfo(trait.url)}>i</button>
                                    </div>                                
                                ))}
                            </div>
                        ) : (<div></div>)}
                        <button type="submit">Next</button>
                    </section>
                )}
            </form>                        
        </React.Fragment>
    )
}

export default Race;