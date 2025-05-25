import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const CharacterContext = createContext();

function CharacterProvider({ children }) {
    const [allCharacters, setAllCharacters] = useState([]);
    const [currentUserCharacters, setCurrentUserCharacters] = useState([]);
    const [currentCharacter, setCurrentCharacter] = useState({});
    const [creator, setCreator] = useState("");

    const { currentUser } = useContext(UserContext);

    return (
        <CharacterContext.Provider value={{ creator, setCreator, setCurrentCharacter }}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider;