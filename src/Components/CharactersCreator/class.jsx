import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import AbilityScores from "./AbilityScores";
import { DataContext } from "../../Context/DataContext";
import '../../Styles/CreateCharacter.css';
import { ThemeContext } from "../../Context/ThemeContext";

function Class() {
    const classes = [
        {
            "id": "barbarian",
            "name": "Barbarian"
        },
        {
            "id": "bard",
            "name": "Bard"
        },
        {
            "id": "cleric",
            "name": "Cleric"
        },
        {
            "id": "druid",
            "name": "Druid"
        },
        {
            "id": "fighter",
            "name": "Fighter"
        },
        {
            "id": "monk",
            "name": "Monk"
        },
        {
            "id": "paladin",
            "name": "Paladin"
        },
        {
            "id": "ranger",
            "name": "Ranger"
        },
        {
            "id": "rogue",
            "name": "Rogue"
        },
        {
            "id": "sorcerer",
            "name": "Sorcerer"
        },
        {
            "id": "warlock",
            "name": "Warlock"
        },
        {
            "id": "wizard",
            "name": "Wizard"
        }
    ]
    const { creator, classComplete, setClassComplete, classPick, setClassPick, setSpellLevelList, setHitDice, setProfChoices, profChoices, setProficiencies, setSavingProficiencies, startingEquipOptions, setStartingEquipment, setStartingEquipOptions, setStartingLevel } = useContext(CharacterContext);
    const { setInfoIndexOne, setInfoIndexTwo, information, description, setInfoURL, setListURL, setSpellListURL } = useContext(DataContext);
    const {theme} = useContext(ThemeContext);
    const [moreInformation, setMoreInformation] = useState("");

    //For new users information
    function moreInfo(info) {
        if (creator === "new") {
            setMoreInformation(info);
        }        
    }

    //selecting the class the user wants to be
    function selectClass(e) {
        setInfoIndexOne("classes/");
        setInfoIndexTwo(e);
        setClassPick(e);      
    }

    //Choice of proficiencies added
    function selectProficiency(e) {
        if (e.target.checked) {
            setProfChoices([...profChoices, e.target.value]);
        }
        else if (!e.target.checked) {
            const newChoices = profChoices.filter((choice) => choice !== e.target.value);
            setProfChoices(newChoices);
        }
    }

    //selecting equipment
    function selectEquipment(e) {
        if (e.target.checked) {
            setStartingEquipOptions([...startingEquipOptions, e.target.value]);
        }
        else if (!e.target.checked) {
            const newEquipment = startingEquipOptions.filter((equip) => equip !== e.target.value);
            setStartingEquipOptions(newEquipment);
        }
        console.log(startingEquipOptions);
    }

    //moving the user to the next section
    function complete(e) {
        e.preventDefault();
        setHitDice(information.hit_die);
        setProficiencies(information.proficiencies);
        setSavingProficiencies(information.saving_throws);
        setStartingEquipment(information.starting_equipment);
        setListURL(information.class_levels); 
        setSpellListURL(information.spells);
        setClassComplete(true);        
    }

    return (
        <section>
            {classComplete ? (
                <AbilityScores />
            ) : (
                <React.Fragment>
                    <h2>Class</h2>
                    {creator === "new" ? (
                    <p  className={theme ? "desc-light" : "desc"}>More Information: {moreInformation}</p>
                    ) : <p></p>}
                    <form onSubmit={complete} className={theme ? "class-light form" : "class form"}>
                    
                        <label htmlFor="classes">Choose a Class: </label>
                        <select id="classes" onChange={(e) => selectClass(e.target.value)} defaultValue={null} onClick={() => moreInfo("Pick a class. This is like your proffesion. This will provide you with certain abilities and items.")} required>
                            <option value={null}>Choose One</option>
                            {classes.map((classItem) => (
                                <option value={classItem.id} key={classItem.id}>{classItem.name}</option>
                            ))}
                        </select>  
                        {classPick === "" || classPick === "none" || classPick === null ? (<article></article>) : (
                            <article className="class data-collection">
                                {information.proficiency_choices && information.proficiency_choices.map((choice, key) => (
                                    <React.Fragment>
                                     <p>{choice.desc}</p>
                                        <p>Choose {choice.choose} Proficiencies: </p>
                                        <div key={key} className="proficiencies-choices">                                        
                                         {choice.from.options && choice.from.options.map((option) => (
                                               <div key={option.item && option.item.index}>                                            
                                                 <input type="checkbox" value={option.item && option.item.name} name={option.item && option.item.index} onChange={(e) => selectProficiency(e)} onClick={() => moreInfo("You will be proficient in any item you choose")} />
                                                    <label htmlFor={option.item && option.item.index}>{option.item && option.item.name}</label>
                                                </div>
                                            ))}
                                        </div>  
                                    </React.Fragment>          
                                ))}
                                <p>Choose from the following equipment: </p>
                                {information.starting_equipment_options && information.starting_equipment_options.map((option, key) => (
                                    <div key={key}>
                                      <p>Choose {option.choose} equipment items: </p>
                                     {option.from.options && option.from.options.map((equip) => (
                                          equip.option_type === "counted_reference" ? (
                                            <div key={equip.of && equip.of.index}>                                            
                                                <input type="checkbox" value={equip.of && equip.of.name} name={equip.of && equip.of.index} onChange={(e) => selectEquipment(e)} onClick={() => moreInfo("This is the equipment you will have available to you.")}/>
                                                <label htmlFor={equip.of && equip.of.index}>{equip.of && equip.of.name}</label>
                                            </div>
                                            ) : (
                                            <React.Fragment></React.Fragment>
                                            )
                                        ))}
                                    </div>
                                ))}
                                <label htmlFor="level">Starting Level: </label>
                                <input className={theme ? "level-light" : "level"} name="level" type="text" onChange={(e) => setStartingLevel(e.target.value)} onClick={() => moreInfo("Ask your Dungeon Master what level your character needs to be for the campaign you are playing.")}/>
                            
                                <button type="submit">Next</button>
                            </article>
                        )}           
                    </form>
                </React.Fragment>
            )}
        </section>
    )
}

export default Class;