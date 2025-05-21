import React, { useContext, useState } from "react";
import { DataContext } from "../Context/Data/DataContext";

function Rules() {
    const [clicked, setClicked] = useState(false);
    const [ruleSet, setRuleSet] = useState("");
    const { setRuleIndexOne, setRuleIndexTwo, mainSectionData, subSectionData, setOtherRuleIndexOne, otherRules } = useContext(DataContext);
    

    function accessRules(sectionIndex) {
        setClicked(true);
        setRuleSet("SetOne");
        setRuleIndexOne("rules/");
        setRuleIndexTwo(sectionIndex);
    }

    function accessRaceRules(sectionIndex) {
        setRuleSet("Races");
        setOtherRuleIndexOne(sectionIndex);
    }

    function accessClassRules(sectionIndex) {
        setRuleSet("Classes");
        setOtherRuleIndexOne(sectionIndex);
    }

    function accessBackgroundRules(sectionIndex) {
        setRuleSet("Background");
        setOtherRuleIndexOne(sectionIndex);
    }

    function accessFeaturesRules(sectionIndex) {
        setRuleSet("Features");
        setOtherRuleIndexOne(sectionIndex);
    }

    function accessSpellsRules(sectionIndex) {
        setRuleSet("Spells");
        setOtherRuleIndexOne(sectionIndex);
    }

    return (
        <React.Fragment>
            <h1>Rules</h1>
            {!clicked ? 
                (<section>
                    <button onClick={() => accessRules("adventuring/")}>Adventuring</button>
                    <button onClick={() => accessRules("combat/")}>Combat</button>
                    <button onClick={() => accessRules("equipment/")}>Equipment</button>
                    <button onClick={() => accessRules("spellcasting/")}>Spell Casting</button>
                    <button onClick={() => accessRules("using-ability-scores/")}>Ability Scores</button>
                    <button onClick={() => setClicked(true)}>Character</button>
                    <button>Monsters</button>
                    <button onClick={() => accessRules("appendix/")}>Appendix</button>
                </section>) : (
                    <section>
                        <aside>
                            <button onClick={() => accessRules("adventuring/")}>Adventuring</button>
                            <button onClick={() => accessRules("combat/")}>Combat</button>
                            <button onClick={() => accessRules("equipment/")}>Equipment</button>
                            <button onClick={() => accessRules("spellcasting/")}>Spell Casting</button>
                            <button onClick={() => accessRules("using-ability-scores/")}>Ability Scores</button>
                            <button>Character</button>
                                <button onClick={() => accessRaceRules("races/")}>Races</button>
                                <button onClick={() => accessClassRules("classes/")}>Classes</button>
                                <button onClick={() => accessBackgroundRules("backgrounds/")}>Personality & Background</button>
                                <button onClick={() => accessFeaturesRules("features/")}>Features</button>
                                <button onClick={() => accessSpellsRules("spells/")}>Spells</button>
                            <button onClick={() => accessRules("appendix/")}>Appendix</button>
                        </aside>
                        <article>
                            {ruleSet === "SetOne" ? (
                                <React.Fragment>
                                    <h1>{mainSectionData.name}</h1>
                                    <p>{mainSectionData.desc}</p>
                                    {subSectionData.map((item) => (
                                        <React.Fragment key={item.index}>
                                            <h2>{item.name}</h2>
                                            <p>{item.desc}</p>
                                        </React.Fragment>                                
                                    ))}
                                </React.Fragment>
                            ) : ruleSet === "Races" ? (
                                <React.Fragment>
                                    {otherRules.map((item) => (
                                        <React.Fragment key={item.index}>
                                            <h1>{item.name}</h1>
                                            <p>Speed: {item.speed}</p>
                                            <p>Ability Bonuses: </p> 
                                            {item.ability_bonuses && item.ability_bonuses.map((bonus) => (
                                                <div key={bonus.index}>
                                                    <p>Ability Score: {bonus.ability_score.name}</p>
                                                    <p>Bonus: {bonus.bonus}</p>
                                                </div>
                                            ))}
                                            <p>Age: {item.age}</p>
                                            <p>Alignment: {item.alignment}</p>
                                            <p>Size: {item.size_description}</p>
                                            <p>Starting Proficiencies: </p>
                                            {item.starting_proficiencies && item.starting_proficiencies.map((prof) => (
                                                <div key={prof.index}>
                                                    <p>{prof.name}</p>
                                                </div>
                                            ))}
                                            <p>Languages: {item.language_desc}</p> 
                                            <p>Traits: </p>
                                            {item.traits && item.traits.map((trait) => (
                                                <p key={trait.index}>{trait.name}</p>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            ) : ruleSet === "Classes" ? (
                                <React.Fragment>
                                    {otherRules.map((item) => (
                                        <React.Fragment>
                                            <h1>{item.name}</h1>
                                            <p>Hit Die: {item.hit_die}</p>
                                            <p>Proficiency Choices: </p>
                                            {item.proficiency_choices && item.proficiency_choices.map((prof) => (
                                                <p>{prof.desc}</p>
                                            ))}
                                            <p>Proficiencies: </p>
                                            {item.proficiencies && item.proficiencies.map((profs) => (
                                                <p>{profs.name}</p>
                                            ))}
                                            <p>Saving Throws: </p>
                                            {item.saving_throws && item.saving_throws.map((throws) => (
                                                <p>{throws.name}</p>
                                            ))}
                                            <p>Starting equipment: </p>
                                            {item.starting_equipment && item.starting_equipment.map((equipment) => (
                                                <p>{equipment.quantity} {equipment.equipment.name}</p>
                                            ))}
                                            <p>Also choose from: </p>
                                            {item.starting_equipment_options && item.starting_equipment_options.map((option) => (
                                                <p>{option.desc}</p>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>

                                </React.Fragment>
                            )}
                            
                        </article>
                    </section>
                )
            }            
        </React.Fragment>
    )
}

export default Rules;