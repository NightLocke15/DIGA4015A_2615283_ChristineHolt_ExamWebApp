import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import RuleContent from "../Components/RuleContent";
import '../Styles/Rules.css';
import { ThemeContext } from "../Context/ThemeContext";


function Rules() {
    const [clicked, setClicked] = useState(false);
    const [ruleSet, setRuleSet] = useState("");
    const { setRuleIndexOne, setRuleIndexTwo, setOtherRuleIndexOne } = useContext(DataContext);
    const {theme} = useContext(ThemeContext);

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
            
            {!clicked ? 
                (
                <React.Fragment>
                    <h1 className="rules-heading">Rules</h1>
                    <section className={theme ? "rule-sections-initial-light":"rule-sections-initial"}>
                        <button onClick={() => accessRules("adventuring/")}>Adventuring</button>
                        <button onClick={() => accessRules("combat/")}>Combat</button>
                        <button onClick={() => accessRules("equipment/")}>Equipment</button>
                        <button onClick={() => accessRules("spellcasting/")}>Spell Casting</button>
                        <button onClick={() => accessRules("using-ability-scores/")}>Ability Scores</button>
                        <button onClick={() => setClicked(true)}>Character</button>
                        <button onClick={() => accessRules("appendix/")}>Appendix</button>
                    </section>
                </React.Fragment>) : (
                    <section className="rules-container">
                        <aside className="rule-sections">
                            <button className={theme? "section-light":"section"} onClick={() => accessRules("adventuring/")}>Adventuring</button>
                            <button className={theme? "section-light":"section"} onClick={() => accessRules("combat/")}>Combat</button>
                            <button className={theme? "section-light":"section"} onClick={() => accessRules("equipment/")}>Equipment</button>
                            <button className={theme? "section-light":"section"} onClick={() => accessRules("spellcasting/")}>Spell Casting</button>
                            <button className={theme? "section-light":"section"} onClick={() => accessRules("using-ability-scores/")}>Ability Scores</button>
                            <button className={theme? "section-light":"section"} >Character</button>
                                <button className={theme? "subsection-light":"subsection"} onClick={() => accessRaceRules("races/")}>Races</button>
                                <button className={theme? "subsection-light":"subsection"} onClick={() => accessClassRules("classes/")}>Classes</button>
                                <button className={theme? "subsection-light":"subsection"} onClick={() => accessBackgroundRules("backgrounds/")}>Personality & Background</button>
                                <button className={theme? "subsection-light":"subsection"} onClick={() => accessFeaturesRules("features/")}>Features</button>
                                <button className={theme? "subsection-light":"subsection"} onClick={() => accessSpellsRules("spells/")}>Spells</button>
                            <button className={theme? "section-light":"section"} onClick={() => accessRules("appendix/")}>Appendix</button>
                        </aside>
                        <article className="rule-content">
                            <RuleContent rules={ruleSet} />
                        </article>
                    </section>
                )
            }            
        </React.Fragment>
    )
}

export default Rules;