import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { DataContext } from "../../Context/DataContext";

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
    const { setCurrentCharacter } = useContext(CharacterContext);
    const { setInfoIndexOne, setInfoIndexTwo, information } = useContext(DataContext);

    function selectRace(e) {
        setInfoIndexOne("races/");
        setInfoIndexTwo(e);
    }

    return (
        <React.Fragment>
            <label htmlFor="races">Choose a race: </label>
            <select id="races" onChange={(e) => selectRace(e.target.value)} required>
                {races.map((race) => (
                    <option value={race.id} key={race.id}>{race.name}</option>
                ))}
            </select>   
            <p>Ability Score Increase:</p>
            {information.ability_bonuses && information.ability_bonuses.map((bonus, key) => (
                <p key={key}>{bonus.ability_score.name} +{bonus.bonus}</p>
            ))}
        </React.Fragment>
    )
}

export default Race;