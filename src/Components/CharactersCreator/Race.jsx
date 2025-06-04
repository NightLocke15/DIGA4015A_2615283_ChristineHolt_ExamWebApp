import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { DataContext } from "../../Context/DataContext";
import { UserContext } from "../../Context/UserContext";
import Class from "./class";
import '../../Styles/CreateCharacter.css';
import { ThemeContext } from "../../Context/ThemeContext";

function Race() {
    //context and states needed
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
    const { setFinish, creator, race, setRace, setAbilityScoreInc, setAlignment, setAge, setHeight, setStartProficiencies, setProfOptions, setLanguages, setTraits, raceComplete, setRaceComplete, setSpeed } = useContext(CharacterContext);
    const { setInfoIndexOne, setInfoIndexTwo, information, description, setInfoURL } = useContext(DataContext);
    let toolTip;
    const {theme} = useContext(ThemeContext);
    const [moreInformation, setMoreInformation] = useState("");

    //Selecting the race user wants to be
    function selectRace(e) {
        setInfoIndexOne("races/");
        setInfoIndexTwo(e);
        setRace(e);   
    }

    //For new users information
    function moreInfo(info) {
        if (creator === "new") {
            setMoreInformation(info);
        }        
    }

    //Moving the user on to the next section
    function complete(e) {
        e.preventDefault();
        setAbilityScoreInc(information.ability_bonuses);
        setStartProficiencies(information.starting_proficiencies);
        setLanguages(information.languages)
        setTraits(information.traits);
        setSpeed(information.speed);
        setFinish(false);
        setRaceComplete(true);
    }

    return (
        <section>
            {raceComplete ? (
                <Class />
            ) : (
                <React.Fragment>
                    {creator === "new" ? (
                        <p  className={theme ? "desc-light" : "desc"}>More Information: {moreInformation}</p>
                    ) : <p></p>}

                <form onSubmit={complete} className={theme ? "race-light form" : "race form"}>
                    <h2>Race</h2>
                    <label htmlFor="races">Choose a race: </label>
                    <select id="races" onClick={() => moreInfo("Pick the race that you would like to be. It is recommended to look for images of the race you are choosing to get an idea of what they look like.")} onChange={(e) => selectRace(e.target.value)} defaultValue={null} required>
                        <option value={null}>Choose One</option>

                        {races.map((race) => (
                            <option value={race.id} key={race.id}>{race.name}</option>
                        ))}
                    </select>   

                    {race === "none" || race === "" || race === null ? (<article></article>) : (
                    <article className="race data-collection"> 
                        <label htmlFor="alignments">Choose an alignment: </label>
                        <select id="alignments" onChange={(e) => setAlignment(e.target.value)} defaultValue={null} onClick={() => moreInfo("Pick an Alignment. This will help you determine how you will play your character moving forward.")}>
                            <option value={null}>Choose One</option>
                            {alignments.map((align, key) => (
                                <option value={align} key={key}>{align}</option>
                            ))}
                        </select>

                        <label htmlFor="age">How old is your character?</label>
                        <input name="age" type="text" onChange={(e) => setAge(e.target.value)} onClick={() => moreInfo(information.age)}/>

                        <label htmlFor="height">How tall are you?</label>
                        <input name="height" type="text" onChange={(e) => setHeight(e.target.value) } onClick={() => moreInfo(information.size_description)}/>

                        {information.starting_proficiency_options ? (
                            <div>
                                <p>Choose one Proficiency:</p>
                                <select id="tool-options" onChange={(e) => setProfOptions(e.target.value)} defaultValue={null}  onClick={() => moreInfo("Pick a skill that you are proficient in. This gives you a bonus when using this skill.")}>
                                    <option value={null}>Choose One</option>
                                    {information.starting_proficiency_options.from.options.map((option, key) => (
                                        <option value={option.item.index} key={key}>{option.item.name}</option>
                                    ))}
                                </select>
                            </div>
                        ) : (<p></p>)}

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