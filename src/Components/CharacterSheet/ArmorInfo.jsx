import React, { useContext, useState } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { ThemeContext } from "../../Context/ThemeContext";

function ArmorInfo() {
    const { currentUserCharacters, setCurrentUserCharacters, allCharacters, setAllCharacters } = useContext(CharacterContext);
    const [clicked, setClicked] = useState(false);    
    const {theme} = useContext(ThemeContext);

    function click() {
        setClicked(!clicked);
    }

    return (
        <article className={theme ? "armor-info-container-light" : "armor-info-container"}>
            <div>
                <p className="armor-info-data">{10 + ( Math.floor(Math.random() * parseInt(currentUserCharacters[0] && currentUserCharacters[0].hit_dice)))}</p>
                <p className="armor-info-heading">Armor Class</p>
            </div>
            <div>
                <input type="text"  className="armor-info-data input"/>
                <p className="armor-info-heading">Initiative</p>
            </div>
            <div>
                <p className="armor-info-data">{currentUserCharacters[0] && currentUserCharacters[0].speed}</p>
                <p className="armor-info-heading">Speed</p>
            </div>
            <div>
                <p className={ clicked ? "armor-info-data inspo-circ-clicked" : "armor-info-data inspo-circ-unclicked"} onClick={click}>***</p>
                <p className="armor-info-heading">Inspiration</p>
            </div>
            <div>
                <p className="armor-info-data">{currentUserCharacters[0] && currentUserCharacters[0].proficiency_bonus}</p>
                <p className="armor-info-heading">Proficiency Bonus</p>
            </div>
            <div>
                <p className="armor-info-data">{currentUserCharacters[0] && currentUserCharacters[0].passive_perception}</p>
                <p className="armor-info-heading">Passive Perception</p>
            </div>
        </article>
    )

}

export default ArmorInfo;