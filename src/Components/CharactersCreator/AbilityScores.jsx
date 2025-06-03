import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { CharacterContext } from "../../Context/CharacterContext";
import Background from "./Background";

function AbilityScores() {
    const scores = [
        {
        "id": "cha",
        "name": "Charisma",
        "url": "/api/2014/ability-scores/cha"
        },
        {
        "id": "con",
        "name": "Constitution",
        "url": "/api/2014/ability-scores/con"
        },
        {
        "id": "dex",
        "name": "Dexterity",
        "url": "/api/2014/ability-scores/dex"
        },
        {
        "id": "int",
        "name": "Intelligence",
        "url": "/api/2014/ability-scores/int"
        },
        {
        "id": "str",
        "name": "Strength",
        "url": "/api/2014/ability-scores/str"
        },
        {
        "id": "wis",
        "name": "Wisdom",
        "url": "/api/2014/ability-scores/wis"
        }
    ]
    const { setInfoIndexOne, setInfoIndexTwo, information, description, setInfoURL } = useContext(DataContext);
    const { abilityScoreComplete, setAbilityScoreComplete, setAbilityScores, abilityScores, setPassivePerception } = useContext(CharacterContext);
    const [rolls, setRolls] = useState([]);
    const [rolled, setRolled] = useState(0);

    function complete(e) {
        e.preventDefault();
        if (abilityScores.length === 6) {
            const wisdomScore = abilityScores.filter((score) => score.name === "Wisdom");
            console.log(wisdomScore);
            setPassivePerception(10 + wisdomScore[0].modifier);
            setAbilityScoreComplete(true);
        }        
    }

    function rollDice() {
        if(rolled < 6) {
            console.log(rolled);
            let roll1 = Math.floor(Math.random() * 6) + 1;
            let roll2 = Math.floor(Math.random() * 6) + 1;
            let roll3 = Math.floor(Math.random() * 6) + 1;

            setRolled(rolled + 1);
            setRolls([...rolls, { id: rolled, roll: roll1 + roll2 + roll3}]);
        }        
                
    }

    function selectScore(roll, e) {
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
            setAbilityScores([...abilityScores, {name: e.target.value, score: roll, modifier: modifier}]);
        }
        
        console.log(abilityScores);
    }

    //https://stackoverflow.com/questions/68474036/i-used-splice-to-remove-an-element-of-an-array-passed-as-a-props-with-indexof-me
    return(
        <section>
            {abilityScoreComplete ? (
                <Background />
            ) : (
                <form onSubmit={complete}>
                    <h2>Ability Scores</h2>
                    <p>Roll 6 times for scores: </p>
                    <button type="button" onClick={rollDice}>Roll Dice</button>
                        {rolls.map((roll, key) => (
                            <section>
                                <p key={key}>{roll.roll}</p>
                                <select defaultValue={null} onChange={(e) => selectScore(roll.roll, e)}>
                                    <option value={null}>Choose A Score</option>
                                    {scores.map((score) => (
                                        <option key={score.id} value={score.name}>{score.name}</option>
                                    ))}
                                </select>                                
                            </section>
                        ))}                    
                    <button type="submit">Next</button>             
                </form>
            )}            
        </section>
    )
    
}

export default AbilityScores;