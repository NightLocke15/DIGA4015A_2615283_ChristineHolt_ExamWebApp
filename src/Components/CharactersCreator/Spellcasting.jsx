import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { CharacterContext } from "../../Context/CharacterContext";
import CharacterSheet from "../../Pages/CharacterSheet";
import { useNavigate } from "react-router-dom";
import FinalDetails from "./FinalDetails";

function Spellcasting() {
    const { information, description, setInfoURL, spellList, list } = useContext(DataContext);
    const { abilityScores, startingLevel, setSpells, spells, setAbilityScoreBonus, 
        setProfBonus, setFeatures, cantrips, setCantrips, spellsComplete, 
            setSpellsComplete, } = useContext(CharacterContext);
    
    function addCantrip(e, level, id) {
        if (e.target.checked) {
            setCantrips([...cantrips, {id: id, name: e.target.value, level: level} ])
        }
        else if (!e.target.checked) {
            const newCantripList = cantrips.filter((spell) => spell.name !== e.target.value);
            setCantrips(newCantripList);
        }
    }

    function addSpell(e, level, id) {
        if (e.target.checked) {
            setSpells([...spells, {id: id, name: e.target.value, level: level} ])
        }
        else if (!e.target.checked) {
            const newSpellList = spells.filter((spell) => spell.name !== e.target.value);
            setSpells(newSpellList);
        }
    }

    function complete(e) {
        e.preventDefault();
        setAbilityScoreBonus(list[startingLevel - 1].ability_score_bonuses);
        setProfBonus(list[startingLevel - 1].prof_bonus);
        setFeatures(list[startingLevel - 1].features);
        setSpellsComplete(true);
    }

    return (     
        <React.Fragment>  
            {spellsComplete ? (<FinalDetails />) : (
                <section>
                {information.name === "Bard" || information.name === "Sorcerer" || information.name === "Warlock" ? (
                    <form onSubmit={complete}>
                    <h2>Spellcasting</h2>
                    <p>As a level {startingLevel} {information && information.name}, you posses the following: </p>
                    <section>
                        <p>{list[startingLevel - 1] && list[startingLevel - 1].spellcasting.cantrips_known} Cantrips</p>
                        {spellList && spellList.results.filter((spell) => spell.level === 0).map((spell) => (
                            <React.Fragment key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addCantrip(e, spell.level, spell.index)}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </React.Fragment>
                        ))}
                        <p>{list[startingLevel - 1] && list[startingLevel - 1].spellcasting.spells_known} Spells</p>
                        {spellList && spellList.results.filter((spell) => spell.level <= startingLevel && spell.level > 0).map((spell) => (
                            <React.Fragment key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addSpell(e, spell.level, spell.index)} />
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </React.Fragment>
                        ))}
                    </section>
                    <button type="submit">Finish</button>
                </form>
                ) : information.name === "Cleric" || information.name === "Druid"? (
                    <form onSubmit={complete}>
                        <h2>Spellcasting</h2>
                    <p>As a level {startingLevel} {information && information.name}, you posses the following: </p>
                    <section>
                        <p>{list[startingLevel - 1] && list[startingLevel - 1].spellcasting.cantrips_known} Cantrips</p>
                        {spellList && spellList.results.filter((spell) => spell.level === 0).map((spell) => (
                            <React.Fragment key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addCantrip(e, spell.level, spell.index)}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </React.Fragment>
                        ))}
                        <p>{abilityScores.find((item) => item.name === "Wisdom").modifier + "+" + startingLevel} Spells</p>
                        {spellList && spellList.results.filter((spell) => spell.level <= startingLevel && spell.level > 0).map((spell) => (
                            <React.Fragment key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addSpell(e, spell.level, spell.index)} />
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </React.Fragment>
                        ))}
                    </section>
                    <button type="submit">Finish</button>
                    </form>
                ) : information.name === "Paladin" && startingLevel > 1 ? (
                <form onSubmit={complete}>
                        <h2>Spellcasting</h2>
                    <p>As a level {startingLevel} {information && information.name}, you posses the following: </p>
                    <section>
                        <p>{abilityScores.find((item) => item.name === "Charisma").modifier + "+" + startingLevel} Spells</p>
                        {spellList && spellList.results.filter((spell) => spell.level <= startingLevel && spell.level > 0).map((spell) => (
                            <React.Fragment key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addSpell(e, spell.level, spell.index)} />
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </React.Fragment>
                        ))}
                    </section>
                    <button type="submit">Finish</button>
                    </form>
                ) : information.name === "Ranger" && startingLevel > 1 ? (
                <form onSubmit={complete}>
                    <h2>Spellcasting</h2>
                    <p>As a level {startingLevel} {information && information.name}, you posses the following: </p>
                    <section>
                        <p>{list[startingLevel - 1] && list[startingLevel - 1].spellcasting.spells_known} Spells</p>
                        {spellList && spellList.results.filter((spell) => spell.level <= startingLevel && spell.level > 0).map((spell) => (
                            <React.Fragment key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addSpell(e, spell.level, spell.index)} />
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </React.Fragment>
                        ))}
                    </section>
                    <button type="submit">Finish</button>
                </form>
                ) : information.name === "Wizard" ? (
                <form onSubmit={complete}>
                        <h2>Spellcasting</h2>
                    <p>As a level {startingLevel} {information && information.name}, you posses the following: </p>
                    <section>
                        <p>{list[startingLevel - 1] && list[startingLevel - 1].spellcasting.cantrips_known} Cantrips</p>
                        {spellList && spellList.results.filter((spell) => spell.level === 0).map((spell) => (
                            <React.Fragment key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addCantrip(e, spell.level, spell.index)}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </React.Fragment>
                        ))}
                        <p>{abilityScores.find((item) => item.name === "Wisdom").modifier + "+" + startingLevel} Spells</p>
                        {spellList && spellList.results.filter((spell) => spell.level <= startingLevel && spell.level > 0).map((spell) => (
                            <React.Fragment key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addSpell(e, spell.level, spell.index)} />
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </React.Fragment>
                        ))}
                    </section>
                    <button type="submit">Finish</button>
                    </form>) : (
                        <form  onSubmit={complete}>
                            <p>You do not have any spells.</p>
                            <button type="submit">Finish</button>
                        </form>
                    )
                    }
                
            </section>
            )}            
        </React.Fragment> 
    )
}

export default Spellcasting;