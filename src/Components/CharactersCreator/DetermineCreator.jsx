import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import Race from "./Race";
import '../../Styles/CreateCharacter.css';
import { ThemeContext } from "../../Context/ThemeContext";

function DetermineCreator() {
    //Context and States needed
    const { creator, setCreator } = useContext(CharacterContext);
    const {theme} = useContext(ThemeContext);

    return (
        <article>
            {creator === "" ? (
                <section>
                    <h2>Are you an experienced player?</h2>
                    <article className={theme ? "determine-light container" : "determine container"}>
                        <button onClick={() => setCreator("new")}>No, please guide me!</button>
                        <button onClick={() => setCreator("experienced")}>Yes, no guidance needed.</button>
                    </article>
                    <p className="determine description">In this creator, you will be led through all the choices that need tobe made in creating a character. The information that is set and does not require a choice will be added to your character sheet auto matically, and you can view it after creation.</p>
                </section>
            ) : (
                <Race />
            )}
        </article>
    )
}

export default DetermineCreator;