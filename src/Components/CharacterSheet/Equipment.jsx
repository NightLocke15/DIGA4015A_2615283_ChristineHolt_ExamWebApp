import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { ThemeContext } from "../../Context/ThemeContext";

function Equipment() {
    const { currentUserCharacters, setCurrentUserCharacters, allCharacters, setAllCharacters } = useContext(CharacterContext);
    const {theme} = useContext(ThemeContext);
    return (
        <article className={theme ? "equipment-list-light": "equipment-list"}>
            <h3>Equipment</h3>
            <ul>
                {currentUserCharacters[0] && currentUserCharacters[0].starting_equipment.map((equip) => (
                    <li>{equip.quantity} {equip.equipment.name}</li>
                ))}
                {currentUserCharacters[0] && currentUserCharacters[0].starting_equipment_choices.map((equip) => (
                    <li>{equip}</li>
                )) }
            </ul>
        </article>
    )
}

export default Equipment;