import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { useNavigate } from "react-router-dom";
import '../../Styles/CreateCharacter.css';
import { ThemeContext } from "../../Context/ThemeContext";
import DetermineCreator from "../../Components/CharactersCreator/DetermineCreator";


function FinalDetails() {
    const { finish, setFinish, setCharacterName, setCampaignName, createNewCharacter } = useContext(CharacterContext);
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    //Finishing the character sheet
    function complete(e) {
        e.preventDefault();
        createNewCharacter();
        navigate('/list');
    }

    return(
        <section>
            {finish ? (<DetermineCreator />) : (
                <form onSubmit={complete} className={theme ? "final-details-light form" : "final-details form"}>
            <h2>Final Details</h2>
            <label htmlFor="name">Character Name: </label>
            <input name="name" type="text" onChange={(e) => setCharacterName(e.target.value)}/>
            <label htmlFor="campaign">Campaign Name: </label>
            <input name="campaign" type="text" onChange={(e) => setCampaignName(e.target.value)}/>
            <button type="submit">Finish</button>
            </form>
            )}
            
        </section>
    )
}

export default FinalDetails;