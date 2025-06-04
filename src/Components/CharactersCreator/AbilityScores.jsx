import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { CharacterContext } from "../../Context/CharacterContext";
import Background from "./Background";
import '../../Styles/CreateCharacter.css';
import { ThemeContext } from "../../Context/ThemeContext";

function AbilityScores() {
    const scores = [
        {
        "id": "CHA",
        "name": "Charisma",
        "url": "/api/2014/ability-scores/cha"
        },
        {
        "id": "CON",
        "name": "Constitution",
        "url": "/api/2014/ability-scores/con"
        },
        {
        "id": "DEX",
        "name": "Dexterity",
        "url": "/api/2014/ability-scores/dex"
        },
        {
        "id": "INT",
        "name": "Intelligence",
        "url": "/api/2014/ability-scores/int"
        },
        {
        "id": "STR",
        "name": "Strength",
        "url": "/api/2014/ability-scores/str"
        },
        {
        "id": "WIS",
        "name": "Wisdom",
        "url": "/api/2014/ability-scores/wis"
        }
    ]
    const { setInfoIndexOne, setInfoIndexTwo, information, description, setInfoURL } = useContext(DataContext);
    const { creator, abilityScoreComplete, setAbilityScoreComplete, setAbilityScores, abilityScores, setPassivePerception } = useContext(CharacterContext);
    const [rolls, setRolls] = useState([]);
    const [rolled, setRolled] = useState(0);
    const {theme} = useContext(ThemeContext);
    const [moreInformation, setMoreInformation] = useState("");
    
    //For new users information
    function moreInfo(info) {
        if (creator === "new") {
            setMoreInformation(info);
        }        
    }

    //taking the user to the next section
    function complete(e) {
        e.preventDefault();
        if (abilityScores.length === 6) {
            const wisdomScore = abilityScores.filter((score) => score.name === "Wisdom");
            console.log(wisdomScore);
            setPassivePerception(10 + wisdomScore[0].modifier);
            setAbilityScoreComplete(true);
        }        
    }

    //Rolling the dice for user scores
    function rollDice() {
        if(rolled < 6) {
            console.log(rolled);
            let roll1 = Math.floor(Math.random() * 6) + 1;
            let roll2 = Math.floor(Math.random() * 6) + 1;
            let roll3 = Math.floor(Math.random() * 6) + 1;

            setRolled(rolled + 1);
            setRolls([...rolls, { id: rolled, roll: roll1 + roll2 + roll3}]);
        }        
        moreInfo("These are your ability Scores. They help you traverse through the world and interact with it.");
                
    }

    //Assigning each score to an ability
    function selectScore(roll, e, id) {
        const modifier = 
            roll === 1 ? -5 : 
                        roll >= 2 && roll <= 3 ? -4 :
                        roll >= 4 && roll <= 5 ? -3 : 
                        roll >= 6 && roll <= 7 ? -2 :
                        roll >= 8 && roll <= 9 ? -1 :
                        roll >= 10 && roll <= 11 ? 0 :
                        roll >= 12 && roll <= 13 ? 1 :
                        roll >= 14 && roll <= 15 ? 2 :
                        roll >= 16 && roll <= 17 ? 3 :
                        roll >= 18 && roll <= 19 ? 4 :
                        roll >= 20 && roll <= 21 ? 5 :
                        roll >= 22 && roll <= 23 ? 6 :
                        roll >= 24 && roll <= 25 ? 7 :
                        roll >= 26 && roll <= 27 ? 8 :
                        roll >= 28 && roll <= 29 ? 9 :
                        10;
        if (abilityScores.some((score) => score.name === e.target.value)) {
            const newScores = abilityScores.map((aScore) => {
                if (aScore.name === e.target.value) {
                    return {
                        ...aScore,
                        score: roll,
                        modifier: modifier 
                    };
                }
                else {
                    return aScore;
                }
            })
            setAbilityScores(newScores);
            console.log(abilityScores)
        }
        else {
            setAbilityScores([...abilityScores, {id: scores.filter((score) => score.name === e.target.value)[0].id, name: e.target.value, score: roll, modifier: modifier}]);
        }
        
        console.log(abilityScores);
    }

    //
    //Title: I used splice to remove an element of an array passed as a props with indexOf method to navigate the element and instead it removed all but the first1
    //Author: Tushar Shahi
    //Date: 4 June 2025
    //Availability: https://stackoverflow.com/questions/68474036/i-used-splice-to-remove-an-element-of-an-array-passed-as-a-props-with-indexof-me
    return(
        <section>
            {abilityScoreComplete ? (
                <Background />
            ) : (
                <form onSubmit={complete} className={ theme ? "ability-score-light form" : "ability-score form"}>
                    {creator === "new" ? (
                    <p  className={theme ? "desc-light" : "desc"}>More Information: {moreInformation}</p>
                    ) : <p></p>}
                    <h2>Ability Scores</h2>
                    <p>Roll 6 times for scores: </p>
                    <button type="button" onClick={rollDice}>Roll Dice</button>
                    <section className="rolls">
                        {rolls.map((roll, key) => (
                            <article>
                                <p key={key}>{roll.roll}</p>
                                <select defaultValue={null} onChange={(e) => selectScore(roll.roll, e)}>
                                    <option value={null}>Choose</option>
                                    {scores.map((score) => (
                                        <option key={score.id} value={score.name}>{score.name}</option>
                                    ))}
                                </select>                                
                            </article>
                        ))} 
                    </section>                   
                    <button type="submit">Next</button>             
                </form>
            )}            
        </section>
    )
    
}

export default AbilityScores;