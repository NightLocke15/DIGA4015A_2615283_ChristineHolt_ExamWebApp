import React from "react";
import DetermineCreator from "../Components/CharactersCreator/DetermineCreator";
import '../Styles/CreateCharacter.css';

function CreateCharacter() {
    return (
        <section>
            <h1 className="heading">CREATE A NEW CHARACTER</h1>
            <DetermineCreator />
        </section>
    )
}

export default CreateCharacter;