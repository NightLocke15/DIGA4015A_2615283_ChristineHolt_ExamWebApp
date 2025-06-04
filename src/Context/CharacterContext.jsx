import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const CharacterContext = createContext();

function CharacterProvider({ children }) {
    const [allCharacters, setAllCharacters] = useState([{
                user: "user",
                name: "Rynwin Heavyblade",
                campaign: "Noob in a cave",
                class: "Ranger",
                race: "Elf",
                level: "5",
                alignment: "True Neutral",
                background: "Custom",
                experience_points: 0,
                speed: 30,
                age: "50",
                height: "6ft",
                languages: [
                    {
                    "index": "common",
                    "name": "Common",
                    "url": "/api/2014/languages/common"
                    },
                    {
                    "index": "elvish",
                    "name": "Elvish",
                    "url": "/api/2014/languages/elvish"
                    }
                ],
                traits: [
                    {
                    "index": "darkvision",
                    "name": "Darkvision",
                    "url": "/api/2014/traits/darkvision"
                    },
                    {
                    "index": "fey-ancestry",
                    "name": "Fey Ancestry",
                    "url": "/api/2014/traits/fey-ancestry"
                    },
                    {
                    "index": "trance",
                    "name": "Trance",
                    "url": "/api/2014/traits/trance"
                    },
                    {
                    "index": "keen-senses",
                    "name": "Keen Senses",
                    "url": "/api/2014/traits/keen-senses"
                    }
                ],
                armorClass: 15,
                proficiency_bonus: 2,
                passive_perception: 12,
                copper: "",
                silver: "",
                electrum: "",
                gold: "",
                platinum: "",
                ability_score_increases: [
                    {
                    "ability_score": {
                        "index": "dex",
                        "name": "DEX",
                        "url": "/api/2014/ability-scores/dex"
                    },
                    "bonus": 2
                    }
                ],
                ability_Score_Bonus: 1,
                ability_scores: [
                    {
                        id: "CHA", name: "Charisma", score: 10, modifier: 0
                    },
                    {
                        id: "CON", name: "Constitution", score: 10, modifier: 0
                    },
                    {
                        id: "DEX", name: "Dexterity", score: 10, modifier: 0
                    },
                    {
                        id: "STR", name: "Strength", score: 10, modifier: 0
                    },
                    {
                        id: "INT", name: "Intelligence", score: 10, modifier: 0
                    },
                    {
                        id: "WIS", name: "Wisdom", score: 10, modifier: 0
                    },
                ],
                hit_dice: 10,
                start_proficiencies: [
                    {
                    "index": "skill-perception",
                    "name": "Skill: Perception",
                    "url": "/api/2014/proficiencies/skill-perception"
                    }
                ],
                proficiency_options: [],
                proficiencies: [
                    {
                    "index": "light-armor",
                    "name": "Light Armor",
                    "url": "/api/2014/proficiencies/light-armor"
                    },
                    {
                    "index": "medium-armor",
                    "name": "Medium Armor",
                    "url": "/api/2014/proficiencies/medium-armor"
                    },
                    {
                    "index": "shields",
                    "name": "Shields",
                    "url": "/api/2014/proficiencies/shields"
                    },
                    {
                    "index": "simple-weapons",
                    "name": "Simple Weapons",
                    "url": "/api/2014/proficiencies/simple-weapons"
                    },
                    {
                    "index": "martial-weapons",
                    "name": "Martial Weapons",
                    "url": "/api/2014/proficiencies/martial-weapons"
                    },
                    {
                    "index": "saving-throw-dex",
                    "name": "Saving Throw: DEX",
                    "url": "/api/2014/proficiencies/saving-throw-dex"
                    },
                    {
                    "index": "saving-throw-str",
                    "name": "Saving Throw: STR",
                    "url": "/api/2014/proficiencies/saving-throw-str"
                    }
                ],
                saving_proficiencies: [
                    {
                    "index": "str",
                    "name": "STR",
                    "url": "/api/2014/ability-scores/str"
                    },
                    {
                    "index": "dex",
                    "name": "DEX",
                    "url": "/api/2014/ability-scores/dex"
                    }
                ],
                proficiency_choices: [],
                starting_equipment: [
                    {
                    "equipment": {
                        "index": "longbow",
                        "name": "Longbow",
                        "url": "/api/2014/equipment/longbow"
                    },
                    "quantity": 1
                    },
                    {
                    "equipment": {
                        "index": "arrow",
                        "name": "Arrow",
                        "url": "/api/2014/equipment/arrow"
                    },
                    "quantity": 20
                    }
                ],
                starting_equipment_choices: [],
                other_equipment: [],
                background_description: "background description",
                personality_traits: ["personality Trait"],
                ideal: "ideal",
                bond: "bond",
                flaw: "flaw",
                cantrips: [],
                spells: [],
                features: [
                {
                    "index": "ranger-extra-attack",
                    "name": "Extra Attack",
                    "url": "/api/2014/features/ranger-extra-attack"
                }
                ],
    }]);
    const [currentUserCharacters, setCurrentUserCharacters] = useState({});
    const [currentCharacter, setCurrentCharacter] = useState();
    const [currentCharacterDetails, setCurrentCharacterDetails] = useState();
    const [creator, setCreator] = useState("");
    const [finish, setFinish] = useState(false);

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
        setCurrentUserCharacters({
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

        setRaceComplete(false);
        setClassComplete(false);
        setAbilityScoreComplete(false);
        setBackgroundComplete(false);
        setSpellsComplete(false);
        setCreator("");
        setPersonalityTraits([]);
    }

    return (
        <CharacterContext.Provider value={{ 
            //General
            creator, 
            setCreator, 
            setCurrentCharacter, 
            currentCharacter,
            setAllCharacters,
            allCharacters,
            setCurrentUserCharacters,
            currentUserCharacters,

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
            setCampaignName,
            finish, setFinish
             }}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider;