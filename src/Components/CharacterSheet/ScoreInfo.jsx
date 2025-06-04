import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { ThemeContext } from "../../Context/ThemeContext";

function ScoreInfo() {
    const { currentUserCharacters, setCurrentUserCharacters, allCharacters, setAllCharacters } = useContext(CharacterContext);
        const {theme} = useContext(ThemeContext);
    return (
        <article className={theme ?"statistics-info-light" : "statistics-info"}>
            <h3 className="stats-heading">Statistics</h3>
            <div className="row">
                <p className="stat-name">Checks</p>
                {currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score, key) => (
                    <p key={key} className="stat">{score.modifier}</p>
                ))}
            </div>
            <div className="row">
                <p className="stat-name">Saving Throws</p>
                {currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score, key) => (
                    <p className={currentUserCharacters[0].saving_proficiencies.some((prof) => prof.name === score.id) ? "stat-prof" : "stat"} key={key}>{currentUserCharacters[0].saving_proficiencies.some((prof) => prof.name === score.id) ? 
                        parseInt(score.modifier) + 2 : score.modifier
                    }</p>
                ))}
            </div>
            <div className="row">
                <p className="stat-name">Scores</p>
                {currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score, key) => (
                    <React.Fragment>
                        <p className="stat-score" key={key}>{score.score}</p>
                    </React.Fragment>                    
                ))}
            </div>
            <div className="row">
                <p className="stat-name">Names</p>
                {currentUserCharacters[0] && currentUserCharacters[0].ability_scores.map((score, key) => (
                    <p  className="stat-name-score" key={score.id}>{score.name}</p>                  
                ))}
            </div>
        </article>
    )
}

export default ScoreInfo;