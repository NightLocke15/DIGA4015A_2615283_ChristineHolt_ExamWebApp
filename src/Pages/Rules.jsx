import React, { useState } from "react";

function Rules() {
    const [clicked, setClicked] = useState(false);
    const [section, setSection] = useState("");

    function accessRules(sectionIndex) {
        setClicked(true);
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
                    <button onClick={() => accessRules("")}>Character</button>
                    <button onClick={() => accessRules("monsters/")}>Monsters</button>
                    <button onClick={() => accessRules("appendix/")}>Appendix</button>
                </section>) : (
                    <section>
                        <aside>
                            <button>Adventuring</button>
                            <button>Combat</button>
                            <button>Equipment</button>
                            <button>Spell Casting</button>
                            <button>Ability Scores</button>
                            <button>Character</button>
                                <button>Races</button>
                                <button>Classes</button>
                                <button>Personality & Background</button>
                                <button>Features</button>
                                <button>Spells</button>
                            <button>Monsters</button>
                            <button>Appendix</button>
                        </aside>
                        <article>
                            <p>Pick one of the rulesets</p>
                        </article>
                    </section>
                )
            }            
        </React.Fragment>
    )
}

export default Rules;