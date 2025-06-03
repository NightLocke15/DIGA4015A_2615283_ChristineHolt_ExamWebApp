import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const CharacterContext = createContext();

function CharacterProvider({ children }) {
    const [allCharacters, setAllCharacters] = useState([]);
    const [currentUserCharacters, setCurrentUserCharacters] = useState([]);
    const [currentCharacter, setCurrentCharacter] = useState();
    const [currentCharacterDetails, setCurrentCharacterDetails] = useState();
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
    const [speed, setSpeed] = useState();

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
    const [passivePerception, setPassivePerception] = useState();

    //Background
    const [backgroundDesc, setBackgroundDesc] = useState();
    const [personalityTraits, setPersonalityTraits] = useState([]);
    const [ideal, setIdeal] = useState([]);
    const [bond, setBond] = useState([]);
    const [flaw, setFlaw] = useState([])
    const [backgroundComplete, setBackgroundComplete] = useState(false);

    //Spellcasting
    const [spellLevelList, setSpellLevelList] = useState([]);
    const [spells, setSpells] = useState([]);
    const [abilityScoreBonus, setAbilityScoreBonus] = useState();
    const [features, setFeatures] = useState([]);
    const [cantrips, setCantrips] = useState([]);
    const [profBonus, setProfBonus] = useState([]);
    const [spellsComplete, setSpellsComplete] = useState(false);

    //Final Details
    const [characterName, setCharacterName] = useState("");
    const [campaignName, setCampaignName] = useState("");
    const [armorClass, setArmorClass] = useState();

    const { currentUser } = useContext(UserContext);

    function createNewCharacter() {
        setAllCharacters([...allCharacters, 
            {
                user: currentUser,
                name: characterName,
                campaign: campaignName,
                class: classPick,
                race: race,
                level: startingLevel,
                alignment: alignment,
                background: "Custom",
                experience_points: "",
                speed: speed,
                age: age,
                height: height,
                languages: languages,
                traits: traits,
                armorClass: armorClass,
                proficiency_bonus: profBonus,
                passive_perception: passivePerception,
                money: [
                    {
                        copper: ""                        
                    },
                    {
                        silver: ""                        
                    },
                    {
                        electrum: ""                        
                    },
                    {
                        gold: ""                        
                    },
                    {
                        platinum: ""                        
                    },
                ],
                ability_score_increases: abilityScoreInc,
                ability_Score_Bonus: abilityScoreBonus,
                ability_scores: abilityScores,
                hit_dice: hitDice,
                start_proficiencies: startProficiencies,
                proficiency_options: profOptions,
                proficiencies: proficiencies,
                saving_proficiencies: savingProficiencies,
                proficiency_choices: profChoices,
                starting_equipment: startingEquipment,
                starting_equipment_choices: startingEquipOptions,
                other_equipment: [],
                background_description: backgroundDesc,
                personality_traits: personalityTraits,
                ideal: ideal,
                bond: bond,
                flaw: flaw,
                cantrips: cantrips,
                spells: spells,
                features: features,
            }
        ])
        setCurrentCharacterDetails({
                user: currentUser,
                name: characterName,
                campaign: campaignName,
                class: classPick,
                race: race,
                level: startingLevel,
                alignment: alignment,
                background: "Custom",
                experience_points: "",
                speed: speed,
                age: age,
                height: height,
                languages: languages,
                traits: traits,
                armorClass: armorClass,
                proficiency_bonus: profBonus,
                passive_perception: passivePerception,
                money: [
                    {
                        copper: ""                        
                    },
                    {
                        silver: ""                        
                    },
                    {
                        electrum: ""                        
                    },
                    {
                        gold: ""                        
                    },
                    {
                        platinum: ""                        
                    },
                ],
                ability_score_increases: abilityScoreInc,
                ability_Score_Bonus: abilityScoreBonus,
                ability_scores: abilityScores,
                hit_dice: hitDice,
                start_proficiencies: startProficiencies,
                proficiency_options: profOptions,
                proficiencies: proficiencies,
                saving_proficiencies: savingProficiencies,
                proficiency_choices: profChoices,
                starting_equipment: startingEquipment,
                starting_equipment_choices: startingEquipOptions,
                other_equipment: [],
                background_description: backgroundDesc,
                personality_traits: personalityTraits,
                ideal: ideal,
                bond: bond,
                flaw: flaw,
                cantrips: cantrips,
                spells: spells,
                features: features,
            })

            const character = {
                user: currentUser,
                name: characterName,
                campaign: campaignName,
                class: classPick,
                race: race,
                level: startingLevel,
                alignment: alignment,
                background: "Custom",
                experience_points: "",
                speed: speed,
                age: age,
                height: height,
                languages: languages,
                traits: traits,
                armorClass: armorClass,
                proficiency_bonus: profBonus,
                passive_perception: passivePerception,
                money: [
                    {
                        copper: ""                        
                    },
                    {
                        silver: ""                        
                    },
                    {
                        electrum: ""                        
                    },
                    {
                        gold: ""                        
                    },
                    {
                        platinum: ""                        
                    },
                ],
                ability_score_increases: abilityScoreInc,
                ability_Score_Bonus: abilityScoreBonus,
                ability_scores: abilityScores,
                hit_dice: hitDice,
                start_proficiencies: startProficiencies,
                proficiency_options: profOptions,
                proficiencies: proficiencies,
                saving_proficiencies: savingProficiencies,
                proficiency_choices: profChoices,
                starting_equipment: startingEquipment,
                starting_equipment_choices: startingEquipOptions,
                other_equipment: [],
                background_description: backgroundDesc,
                personality_traits: personalityTraits,
                ideal: ideal,
                bond: bond,
                flaw: flaw,
                cantrips: cantrips,
                spells: spells,
                features: features,
            }

            console.log(character);
    }

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
            setSpeed,

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
            startingLevel,
            setStartingLevel,

            //Ability Scores
            abilityScores,
            setAbilityScores,
            abilityScoreComplete, 
            setAbilityScoreComplete,
            setPassivePerception,

            //Background
            backgroundComplete, 
            setBackgroundComplete,
            backgroundDesc,
            setBackgroundDesc,
            personalityTraits,
            setPersonalityTraits,
            ideal,
            setIdeal,
            bond,
            setBond,
            flaw,
            setFlaw,

            //Spellcasting 
            setSpellLevelList,
            spellLevelList, 
            setSpells, 
            spells, 
            setAbilityScoreBonus, 
            setProfBonus, 
            features, 
            setFeatures, 
            cantrips, 
            setCantrips,
            spellsComplete, 
            setSpellsComplete,

            //functions
            createNewCharacter,
            setCharacterName,
            setCampaignName
             }}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider;