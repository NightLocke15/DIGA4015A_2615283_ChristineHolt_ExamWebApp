import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import RuleContent from "../Components/RuleContent";

function Rules() {
    const [clicked, setClicked] = useState(false);
    const [ruleSet, setRuleSet] = useState("");
    const { setRuleIndexOne, setRuleIndexTwo, setOtherRuleIndexOne } = useContext(DataContext);
    

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
                            <RuleContent rules={ruleSet} />
                        </article>
                    </section>
                )
            }            
        </React.Fragment>
    )
}

export default Rules;