import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { DataContext } from "../../Context/DataContext";
import { UserContext } from "../../Context/UserContext";
import Class from "./class";

function Race() {
    const races = [
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
        "Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "True Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"
    ]
    const { race, setRace, setAbilityScoreInc, setAlignment, setAge, setHeight, setStartProficiencies, setProfOptions, setLanguages, setTraits, raceComplete, setRaceComplete, setSpeed } = useContext(CharacterContext);
    const { setInfoIndexOne, setInfoIndexTwo, information, description, setInfoURL } = useContext(DataContext);
    let toolTip;

    function selectRace(e) {
        setInfoIndexOne("races/");
        setInfoIndexTwo(e);
        setRace(e);   
    }

    function moreInfo(e) {
        setInfoURL(e);
    }

    function complete(e) {
        e.preventDefault();
        setAbilityScoreInc(information.ability_bonuses);
        setStartProficiencies(information.starting_proficiencies);
        setLanguages(information.languages)
        setTraits(information.traits);
        setSpeed(information.speed);
        setRaceComplete(true);
    }

    return (
        <section>
            {raceComplete ? (
                <Class />
            ) : (
                <React.Fragment>
            <form onSubmit={complete}>
                <h2>Race</h2>
                <label htmlFor="races">Choose a race: </label>
                <select id="races" onChange={(e) => selectRace(e.target.value)} defaultValue={null} required>
                    <option value={null}>Choose One</option>
                    {races.map((race) => (
                        <option value={race.id} key={race.id}>{race.name}</option>
                    ))}
                </select>   
                {race === "none" || race === "" || race === null ? (<article></article>) : (
                    <article> 
                        <p>{toolTip}</p>
                        {/*<p>Ability Score Increase:</p>
                        {information.ability_bonuses && information.ability_bonuses.map((bonus, key) => (
                            <p key={key}>{bonus.ability_score.name} +{bonus.bonus}</p>
                        ))}*/}
                        {/*<p>Alignment: {information.alignment}</p>*/}
                        <label htmlFor="alignments">Choose an alignment: </label>
                        <select id="alignments" onChange={(e) => setAlignment(e.target.value)} defaultValue={null}>
                            <option value={null}>Choose One</option>
                            {alignments.map((align, key) => (
                                <option value={align} key={key}>{align}</option>
                            ))}
                        </select>
                        {/*<p>Age: {information.age}</p>*/}
                        <label>How old is your character?
                            <input type="text" onChange={(e) => setAge(e.target.value)} />
                        </label>
                        {/*<p>Size: {information.size_description}</p>*/}
                        <label>How tall are you?
                            <input type="text" onChange={(e) => setHeight(e.target.value)} />ft
                        </label>
                        {/*{information.starting_proficiencies && information.starting_proficiencies.length === 0 ? (<p></p>) : (
                            <div>
                                <p>Starting Proficiencies: </p>
                                {information.starting_proficiencies && information.starting_proficiencies.map((prof) => (
                                    <div key={prof.index}>
                                        <p>{prof.name}</p>
                                    </div>                
                                ))}
                            </div>
                        )}*/}
                        {information.starting_proficiency_options ? (
                            <div>
                                <p>Choose one Proficiency:</p>
                                {/*<p>{information.starting_proficiency_options.desc} Choose one:</p>*/}
                                <select id="tool-options" onChange={(e) => setProfOptions(e.target.value)} defaultValue={null}>
                                    <option value={null}>Choose One</option>
                                    {information.starting_proficiency_options.from.options.map((option, key) => (
                                        <option value={option.item.index} key={key}>{option.item.name}</option>
                                    ))}
                                </select>
                            </div>
                        ) : (<p></p>)}
                        {/*<p>Languages: {information.language_desc}</p>*/}
                        {/*<p>Traits: </p>
                        {Array.isArray(information.traits) ? (
                            <div>
                                {information.traits && information.traits.map((trait) => (
                                    <div key={trait.index}>
                                        <p>{trait.name}</p>
                                        <button onClick={() => moreInfo(trait.url)}>i</button>
                                    </div>                                
                                ))}
                            </div>
                        ) : (<div></div>)}*/}
                        <button type="submit">Next</button>
                    </article>
                )}
            </form>                        
        </React.Fragment>
            )}
        </section>        
    )
}

export default Race;