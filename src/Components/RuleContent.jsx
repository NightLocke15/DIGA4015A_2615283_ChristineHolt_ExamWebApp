import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

function RuleContent(props) {
    const { mainSectionData, subSectionData, otherRules } = useContext(DataContext);
    const { rules } = props;

    return (
        <React.Fragment>
            {rules === "SetOne" ? (
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
                            ) : rules === "Races" ? (
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
                            ) : rules === "Classes" ? (
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
                            ) : rules === "Background" ? (
                                <React.Fragment>
                                    {otherRules.map((item) => (
                                        <React.Fragment>
                                            <h1>{item.name}</h1>
                                            <p>Strating Proficiencies: </p>
                                            {item.starting_proficiencies && item.starting_proficiencies.map((profs) => (
                                                <p>{profs.name}</p>
                                            ))}
                                            <p>You can choose 2 other languages to know.</p>
                                            <p>Starting Equipment: </p>
                                            {item.starting_equipment && item.starting_equipment.map((equipment) => (
                                                <p>{equipment.quantity} {equipment.equipment.name}</p>
                                            ))}
                                            <p>{item.starting_equipment_options && item.starting_equipment_options.from && item.starting_equipment_options.from.equipment_category && item.starting_equipment_options.from.equipment_category.name}</p>
                                            <p>Feature: {item.feature && item.feature.name}</p>
                                            <p>{item.feature && item.feature.desc}</p>
                                            <p>Personality Traits: Choose 2 from the following</p>
                                            {item.personality_traits && item.personality_traits.from.options.map((trait) => (
                                                <p>{trait.string}</p>
                                            ))}
                                            <p>Ideals: Choose 1 from the following</p>
                                            {item.ideals && item.ideals.from.options.map((ideal) => (
                                                <div>
                                                    <p>{ideal.desc}</p>
                                                    {ideal.alignments.map((align) => (
                                                        <p>{align.name}</p>
                                                    ))}
                                                </div>                                               
                                            ))}
                                            <p>Bonds: Choose 1 from tthe following</p>
                                            {item.bonds && item.bonds.from.options.map((bond) => (
                                                <p>{bond.string}</p>
                                            ))}
                                            <p>Flaws: Choose 1 from the following</p>
                                            {item.flaws && item.flaws.from.options.map((flaw) => (
                                                <p>{flaw.string}</p>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            ) : rules === "Features" ? (
                                <React.Fragment>
                                    {otherRules.map((feat) => (
                                        <React.Fragment>
                                            <h2>{feat.name}</h2>
                                            <p>Class: {feat.class && feat.class.name}</p>
                                            <p>Level: {feat.level}</p>
                                            <p>{feat.desc}</p>
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {otherRules.map((spell) => (
                                        <React.Fragment>
                                            <h1>{spell.name}</h1>
                                            <p>{spell.desc}</p>                                            
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            )}
                            
        </React.Fragment>
    )
}

export default RuleContent;