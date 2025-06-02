import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const CharacterContext = createContext();

function CharacterProvider({ children }) {
    const [allCharacters, setAllCharacters] = useState([]);
    const [currentUserCharacters, setCurrentUserCharacters] = useState([]);
    const [currentCharacter, setCurrentCharacter] = useState();
    const [creator, setCreator] = useState("");

    //Current Character Race elements
    const [race, setRace] = useState("");
    const [abilityScoreInc, setAbilityScoreInc] = useState();
    const [alignment, setAlignment] = useState("");
    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [startProficiencies, setStartProficiencies] = useState();
    const [profOptions, setProfOptions] = useState();
    const [languages, setLanguages] = useState();
    const [traits, setTraits] = useState();
    const [raceComplete, setRaceComplete] = useState(false);

    //Current Character Class elements
    const [classPick, setClassPick] = useState("");
    const [hitDice, setHitDice] = useState();
    const [profChoices, setProfChoices] = useState([]);
    const [proficiencies, setProficiencies] = useState();
    const [savingProficiencies, setSavingProficiencies] = useState();
    const [startingEquipment, setStartingEquipment] = useState();
    const [startingEquipOptions, setStartingEquipOptions] = useState([]);
    const [startingLevel, setStartingLevel] = useState();
    const [classComplete, setClassComplete] = useState(false);

    //Ability scores
    const [abilityScores, setAbilityScores] = useState([]);
    const [abilityScoreComplete, setAbilityScoreComplete] = useState(false);

    //Background
    const [backgroundComplete, setBackgroundComplete] = useState(false);

    //Spellcasting

    const { currentUser } = useContext(UserContext);

    return (
        <CharacterContext.Provider value={{ 
            //General
            creator, 
            setCreator, 
            setCurrentCharacter, 
            currentCharacter,

            //Race
            race,
            setRace,
            setAbilityScoreInc,
            setAlignment,
            setAge,
            setHeight,
            setStartProficiencies,
            setProfOptions,
            setLanguages,
            setTraits,
            raceComplete, 
            setRaceComplete,

            //Class
            classComplete,
            setClassComplete,
            classPick,
            setClassPick,
            setHitDice,
            setProfChoices,
            profChoices,
            setProficiencies,
            setSavingProficiencies,
            setStartingEquipment,
            startingEquipOptions,
            setStartingEquipOptions,
            setStartingLevel,

            //Ability Scores
            abilityScores,
            setAbilityScores,
            abilityScoreComplete, 
            setAbilityScoreComplete,

            //Background
            backgroundComplete, 
            setBackgroundComplete,

            //Spellcasting 
             }}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider;