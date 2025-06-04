import React, { useContext, useState } from "react";
import { CharacterContext } from "../Context/CharacterContext";
import { UserContext } from "../Context/UserContext";
import '../Styles/CharacterList.css';
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

function CharacterList() {
    const { allCharacters, setCurrentUserCharacters, currentUserCharacters } = useContext(CharacterContext);
    const { currentUser } = useContext(UserContext);
    const { theme } = useContext(ThemeContext)
    const [search, setSearch] = useState("");
    const [searchedList, setSearchedList] = useState("");
    const navigate = useNavigate();

    function openSheet(name) {
        const currentChar = allCharacters.filter((char) => char.name === name);
        console.log(currentChar);
        setCurrentUserCharacters(currentChar);
        console.log(currentUserCharacters);
        navigate('/sheet');
    }

    function searchList(e) {
        setSearch(e.target.value);
        const list = allCharacters.filter((char) => char.name.toLowerCase().includes(e.target.value.toLowerCase()) && char.user === currentUser);
        setSearchedList(list);
    }
    
    return (
        <React.Fragment>
            <h1 className="heading">Your Characters</h1>
            <input className={theme ? "search-bar-light" : "search-bar"} type="text" placeholder="Search..." onChange={(e) => searchList(e)}/>
            <section className="character-list">  
                              
                {search === null || search === "" ? (allCharacters && allCharacters.filter((char) => char.user === currentUser).map((item, key) => (
                    <article key={key} className={theme ? "character-list-Item-light" : "character-list-Item"} onClick={() => openSheet(item.name)}>
                        <h4 className="character-name">{item.name}</h4>
                        <p>Level: {item.level}</p>
                        <p>Race: {item.race}</p>
                        <p>Campaign: {item.campaign}</p>
                    </article>
                ))) : (searchedList && searchedList.map((item, key) => (
                    <article key={key} className="character-list-Item" onClick={() => openSheet(item.name)}>
                        <h4 className="character-name">{item.name}</h4>
                        <p>Level: {item.level}</p>
                        <p>Race: {item.race}</p>
                        <p>Campaign: {item.campaign}</p>
                    </article>
                )))}
            </section>
        </React.Fragment>
    )
}

export default CharacterList;