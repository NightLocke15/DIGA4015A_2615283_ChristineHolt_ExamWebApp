import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { ThemeContext } from "../../Context/ThemeContext";

function SkillInfo() {
    const { currentUserCharacters, setCurrentUserCharacters, allCharacters, setAllCharacters } = useContext(CharacterContext);
        const {theme} = useContext(ThemeContext);
  return (
    <article className={theme? "skills-light":"skills"}>
        <h3>Skills</h3>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "STR") {
                    return score.modifier;
                }
            })}</p>
            <p>Athletics (STR)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "DEX") {
                    return score.modifier;
                }
            })}</p>
            <p>Acrobatics (DEX)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "DEX") {
                    return score.modifier;
                }
            })}</p>
            <p>Sleight of Hand (DEX)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "DEX") {
                    return score.modifier;
                }
            })}</p>
            <p>Stealth (DEX)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "INT") {
                    return score.modifier;
                }
            })}</p>
            <p>Arcana (INT)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "INT") {
                    return score.modifier;
                }
            })}</p>
            <p>History (INT)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "INT") {
                    return score.modifier;
                }
            })}</p>
            <p>Investigation (INT)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "INT") {
                    return score.modifier;
                }
            })}</p>
            <p>Nature (INT)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "INT") {
                    return score.modifier;
                }
            })}</p>
            <p>Religion (INT)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "WIS") {
                    return score.modifier;
                }
            })}</p>
            <p>Animal Handling (WIS)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "WIS") {
                    return score.modifier;
                }
            })}</p>
            <p>Insight (WIS)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "WIS") {
                    return score.modifier;
                }
            })}</p>
            <p>Medicine (WIS)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "WIS") {
                    return score.modifier;
                }
            })}</p>
            <p>Perception (WIS)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "WIS") {
                    return score.modifier;
                }
            })}</p>
            <p>Survival (WIS)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "CHA") {
                    return score.modifier;
                }
            })}</p>
            <p>Deception (CHA)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "CHA") {
                    return score.modifier;
                }
            })}</p>
            <p>Intimidation (CHA)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "CHA") {
                    return score.modifier;
                }
            })}</p>
            <p>Performance (CHA)</p>
        </div>
        <div>
            <p>{currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score) => {
                if (score.id === "CHA") {
                    return score.modifier;
                }
            })}</p>
            <p>Persuasion (CHA)</p>
        </div>
    </article>
  )

}

export default SkillInfo;