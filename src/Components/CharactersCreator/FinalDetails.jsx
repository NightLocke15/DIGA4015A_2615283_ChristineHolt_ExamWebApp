import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { useNavigate } from "react-router-dom";

function FinalDetails() {
    const { setCharacterName, setCampaignName, createNewCharacter } = useContext(CharacterContext);
    const navigate = useNavigate();

    function complete(e) {
        e.preventDefault();
        createNewCharacter();
        navigate('/sheet');
    }

    return(
        <section>
            <form onSubmit={complete}>
            <h2>Final Details</h2>
            <label htmlFor="name">Character Name: </label>
            <input name="name" type="text" onChange={(e) => setCharacterName(e.target.value)}/>
            <label htmlFor="campaign">Campaign Name: </label>
            <input name="campaign" type="text" onChange={(e) => setCampaignName(e.target.value)}/>
            <button type="submit">Finish</button>
            </form>
        </section>
    )
}

export default FinalDetails;