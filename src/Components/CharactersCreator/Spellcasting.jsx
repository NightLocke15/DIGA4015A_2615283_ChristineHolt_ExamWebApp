import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { CharacterContext } from "../../Context/CharacterContext";
import CharacterSheet from "../../Pages/CharacterSheet";
import { useNavigate } from "react-router-dom";
import FinalDetails from "./FinalDetails";
import '../../Styles/CreateCharacter.css';
import { ThemeContext } from "../../Context/ThemeContext";

function Spellcasting() {
    const { information, description, setInfoURL, spellList, list } = useContext(DataContext);
    const { creator, abilityScores, startingLevel, setSpells, spells, setAbilityScoreBonus, 
        setProfBonus, setFeatures, cantrips, setCantrips, spellsComplete, 
            setSpellsComplete, } = useContext(CharacterContext);
    const {theme} = useContext(ThemeContext);
    const [moreInformation, setMoreInformation] = useState("");
            
    //For new users information
    function moreInfo(info) {
        if (creator === "new") {
            setMoreInformation(info);
        }        
    }
    
    //Adding cantrips to their list
    function addCantrip(e, level, id) {
        if (e.target.checked) {
            setCantrips([...cantrips, {id: id, name: e.target.value, level: level} ])
        }
        else if (!e.target.checked) {
            const newCantripList = cantrips.filter((spell) => spell.name !== e.target.value);
            setCantrips(newCantripList);
        }
    }

    //Adding spells to their list
    function addSpell(e, level, id) {
        if (e.target.checked) {
            setSpells([...spells, {id: id, name: e.target.value, level: level} ])
        }
        else if (!e.target.checked) {
            const newSpellList = spells.filter((spell) => spell.name !== e.target.value);
            setSpells(newSpellList);
        }
    }

    //taking user to the next section
    function complete(e) {
        e.preventDefault();
        setAbilityScoreBonus(list[startingLevel - 1] && list[startingLevel - 1].ability_score_bonuses);
        setProfBonus(list[startingLevel - 1] && list[startingLevel - 1].prof_bonus);
        setFeatures(list[startingLevel - 1] && list[startingLevel - 1].features);
        setSpellsComplete(true);
    }

    return (     
        <React.Fragment>  
            {creator === "new" ? (
                <p  className={theme ? "desc-light" : "desc"}>More Information: {moreInformation}</p>
            ) : <p></p>}
            
            {spellsComplete ? (<FinalDetails />) : (
                <section>
                {information.name === "Bard" || information.name === "Sorcerer" || information.name === "Warlock" ? (
                    <React.Fragment> 
                        <h2>Spellcasting</h2>
                        
                    <p>As a level {startingLevel} {information && information.name}, you posses the following: </p>
                    
                    <form onSubmit={complete} className={ theme ? "spellcasting-light form" : "spellcasting form"}>
                    <section>
                        <p>{list[startingLevel - 1] && list[startingLevel - 1].spellcasting.cantrips_known} Cantrips</p>
                        <article className="spell-list">
                            {spellList && spellList.results.filter((spell) => spell.level === 0).map((spell) => (
                            <div key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addCantrip(e, spell.level, spell.index)} onClick={() => moreInfo("These are your Cantrips. You can always use them, without using a spell slot.")}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </div>
                        ))}
                        </article>
                        
                        <p>{list[startingLevel - 1] && list[startingLevel - 1].spellcasting.spells_known} Spells</p>
                        <article className="spell-list">
                            {spellList && spellList.results.filter((spell) => spell.level <= startingLevel && spell.level > 0).map((spell) => (
                            <div key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addSpell(e, spell.level, spell.index)} onClick={() => moreInfo("These are your spells. These use spell slots, so they have limited uses for each long rest.")}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </div>
                        ))}
                        </article>
                        
                    </section>
                    <button type="submit">Next</button>
                </form>
                </React.Fragment>
                ) : information.name === "Cleric" || information.name === "Druid"? (
                    <React.Fragment> 
                        <h2>Spellcasting</h2>
                    <p>As a level {startingLevel} {information && information.name}, you posses the following: </p>
                    
                    <form onSubmit={complete}  className={ theme ? "spellcasting-light form" : "spellcasting form"}>
                        <section>
                        <p>{list[startingLevel - 1] && list[startingLevel - 1].spellcasting.cantrips_known} Cantrips</p>
                        <article className="spell-list">
                            {spellList && spellList.results.filter((spell) => spell.level === 0).map((spell) => (
                            <div key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addCantrip(e, spell.level, spell.index)} onClick={() => moreInfo("These are your Cantrips. You can always use them, without using a spell slot.")}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </div>
                        ))}
                        </article>
                        
                        <p>{abilityScores.find((item) => item.name === "Wisdom").modifier + "+" + startingLevel} Spells</p>
                        <article className="spell-list">
                            {spellList && spellList.results.filter((spell) => spell.level <= startingLevel && spell.level > 0).map((spell) => (
                            <div key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addSpell(e, spell.level, spell.index)} onClick={() => moreInfo("These are your spells. These use spell slots, so they have limited uses for each long rest.")}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </div>
                        ))}
                        </article>
                        
                    </section>
                    <button type="submit">Next</button>
                    </form>
                    </React.Fragment>
                ) : information.name === "Paladin" && startingLevel > 1 ? (
                <React.Fragment> 
                    <h2>Spellcasting</h2>
                    <p>As a level {startingLevel} {information && information.name}, you posses the following: </p>
                    
                <form onSubmit={complete}  className={ theme ? "spellcasting-light form" : "spellcasting form"}>
                        <section>
                        <p>{abilityScores.find((item) => item.name === "Charisma").modifier + "+" + startingLevel} Spells</p>
                        <article className="spell-list">
                            {spellList && spellList.results.filter((spell) => spell.level <= startingLevel && spell.level > 0).map((spell) => (
                            <div key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addSpell(e, spell.level, spell.index)} onClick={() => moreInfo("These are your spells. These use spell slots, so they have limited uses for each long rest.")}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </div>
                        ))}
                        </article>
                        
                    </section>
                    <button type="submit">Next</button>
                    </form>
                    </React.Fragment>
                ) : information.name === "Ranger" && startingLevel > 1 ? (
                <React.Fragment> 
                    <h2>Spellcasting</h2>
                    <p>As a level {startingLevel} {information && information.name}, you posses the following: </p>
                    
                <form onSubmit={complete}  className={ theme ? "spellcasting-light form" : "spellcasting form"}>
                    <section>
                        <p>{list[startingLevel - 1] && list[startingLevel - 1].spellcasting.spells_known} Spells</p>
                        <article className="spell-list">
                            {spellList && spellList.results.filter((spell) => spell.level <= startingLevel && spell.level > 0).map((spell) => (
                            <div key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addSpell(e, spell.level, spell.index)} onClick={() => moreInfo("These are your spells. These use spell slots, so they have limited uses for each long rest.")}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </div>
                        ))}
                        </article>
                        
                    </section>
                    <button type="submit">Next</button>
                </form>
                </React.Fragment>
                ) : information.name === "Wizard" ? (
                <React.Fragment> 
                    <h2>Spellcasting</h2>
                    <p>As a level {startingLevel} {information && information.name}, you posses the following: </p>
                    
                <form onSubmit={complete}  className={ theme ? "spellcasting-light form" : "spellcasting form"}>
                        <section>
                        <p>{list[startingLevel - 1] && list[startingLevel - 1].spellcasting.cantrips_known} Cantrips</p>
                        <article className="spell-list">
                            {spellList && spellList.results.filter((spell) => spell.level === 0).map((spell) => (
                            <div key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addCantrip(e, spell.level, spell.index)} onClick={() => moreInfo("These are your Cantrips. You can always use them, without using a spell slot.")}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </div>
                        ))}
                        </article>
                        
                        <p>{abilityScores.find((item) => item.name === "Wisdom").modifier + "+" + startingLevel} Spells</p>
                        <article className="spell-list">
                            {spellList && spellList.results.filter((spell) => spell.level <= startingLevel && spell.level > 0).map((spell) => (
                            <div key={spell.index}>
                                <input type="checkbox" value={spell.name} name={spell.index} onChange={(e) => addSpell(e, spell.level, spell.index)} onClick={() => moreInfo("These are your spells. These use spell slots, so they have limited uses for each long rest.")}/>
                                <label htmlFor={spell.index}>{spell.name}</label>
                            </div>
                        ))}
                        </article>
                        
                    </section>
                    <button type="submit">Next</button>
                    </form>
                    </React.Fragment>) : (
                        <form  onSubmit={complete} className={ theme ? "spellcasting-light form" : "spellcasting form"}>
                            <p>You do not have any spells.</p>
                            <button type="submit">Next</button>
                        </form>
                    )
                    }
                
            </section>
            )}            
        </React.Fragment> 
    )
}

export default Spellcasting;