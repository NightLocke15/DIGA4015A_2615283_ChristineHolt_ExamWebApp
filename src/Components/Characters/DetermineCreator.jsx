import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import Race from "./Race";

function DetermineCreator() {
    const { creator, setCreator } = useContext(CharacterContext);

    return (
        <article>
            {creator === "" ? (
                <React.Fragment>
                    <h2>Are you an experienced player?</h2>
                    <button onClick={() => setCreator("new")}>No, please guide me!</button>
                    <button onClick={() => setCreator("experienced")}>Yes, no guidance needed.</button>
                </React.Fragment>
            ) : (
                <Race />
            )}
        </article>
    )
}

export default DetermineCreator;