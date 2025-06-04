import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharacterContext";
import { ThemeContext } from "../../Context/ThemeContext";

function MoneyInfo() {
    const { currentUserCharacters, setCurrentUserCharacters, allCharacters, setAllCharacters } = useContext(CharacterContext);
    const {theme} = useContext(ThemeContext);
    function copper(e) {
        const chars = allCharacters.map((char) => {
            if (char.name === currentUserCharacters[0] && currentUserCharacters[0].name) {
                setCurrentUserCharacters({...char, copper: e.target.value})
                return {
                    ...char,
                    copper: e.target.value
                }
            }
            else {
                return char;
            }
        })
        setAllCharacters(chars);
    }

    function silver(e) {
        const chars = allCharacters.map((char) => {
            if (char.name === currentUserCharacters[0] && currentUserCharacters[0].name) {
                setCurrentUserCharacters({...char, silver: e.target.value})
                return {
                    ...char,
                    silver: e.target.value
                }
            }
            else {
                return char;
            }
        })
        setAllCharacters(chars);        
    }

    function electrum(e) {
        const chars = allCharacters.map((char) => {
            if (char.name === currentUserCharacters[0] && currentUserCharacters[0].name) {
                setCurrentUserCharacters({...char, electrum: e.target.value})
                return {
                    ...char,
                    electrum: e.target.value
                }
            }
            else {
                return char;
            }
        })
        setAllCharacters(chars);
    }

    function gold(e) {
        const chars = allCharacters.map((char) => {
            if (char.name === currentUserCharacters[0] && currentUserCharacters[0].name) {
                setCurrentUserCharacters({...char, gold: e.target.value})
                return {
                    ...char,
                    gold: e.target.value
                }
            }
            else {
                return char;
            }
        })
        setAllCharacters(chars);
    }

    function platinum(e) {
        const chars = allCharacters.map((char) => {
            if (char.name === currentUserCharacters[0] && currentUserCharacters[0].name) {
                setCurrentUserCharacters({...char, platinum: e.target.value})
                return {
                    ...char,
                    platinum: e.target.value
                }
            }
            else {
                return char;
            }
        })
        setAllCharacters(chars);
    }

    return (
        <article className={theme ? "money-light" : "money"}>
            <h3 className="money-heading">Money</h3>
            <label htmlFor="copper">CP</label>
            <input name="copper" type="text" onChange={(e) => copper(e)}/>
            <label htmlFor="silver">SP</label>
            <input name="silver" type="text" onChange={(e) => silver(e)}/>
            <label htmlFor="electrum">EP</label>
            <input name="electrum" type="text" onChange={(e) => electrum(e)}/>
            <label htmlFor="gold">GP</label>
            <input name="gold" type="text" onChange={(e) => gold(e)}/>
            <label htmlFor="platinum">PP</label>
            <input name="platinum" type="text" onChange={(e) => platinum(e)}/>
        </article>
    )
}

export default MoneyInfo;