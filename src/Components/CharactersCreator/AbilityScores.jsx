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
    const { abilityScoreComplete, setAbilityScoreComplete, setAbilityScores, abilityScores } = useContext(CharacterContext);
    const [rolls, setRolls] = useState([]);
    const [rolled, setRolled] = useState(0);

    function complete(e) {
        e.preventDefault();
        if (abilityScores.length === 6) {
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
        if (abilityScores.some((score) => score.name === e.target.value)) {
            const newScores = abilityScores.map((aScore) => {
                if (aScore.name === e.target.value) {
                    return {
                        ...aScore,
                        score: roll
                    };
                }
                else {
                    return aScore;
                }
            })
            setAbilityScores(newScores);
        }
        else {
            setAbilityScores([...abilityScores, {name: e.target.value, score: roll}]);
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