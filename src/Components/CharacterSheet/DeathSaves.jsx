import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function DeathSaves() {
    const {theme} = useContext(ThemeContext);
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);
    const [clicked5, setClicked5] = useState(false);
    const [clicked6, setClicked6] = useState(false);

    function click1() {
        setClicked1(!clicked1);
    }

    function click2() {
        setClicked2(!clicked2);
    }

    function click3() {
        setClicked3(!clicked3);
    }

    function click4() {
        setClicked4(!clicked4);
    }

    function click5() {
        setClicked5(!clicked5);
    }

    function click6() {
        setClicked6(!clicked6);
    }

    return (
        <article className={theme ? "death-saves-light":"death-saves"}>
            <h3>Death Saves</h3>
            <p>Success</p>
            <div>
                <p className={ clicked1 ? "death-save-clicked" : "death-save-unclicked"} onClick={click1}>***</p>
                <p className={ clicked2 ? "death-save-clicked" : "death-save-unclicked"} onClick={click2}>***</p>
                <p className={ clicked3 ? "death-save-clicked" : "death-save-unclicked"} onClick={click3}>***</p>
            </div>
            <p>Failure</p>
            <div>
                <p className={ clicked4 ? "death-save-clicked" : "death-save-unclicked"} onClick={click4}>***</p>
                <p className={ clicked5 ? "death-save-clicked" : "death-save-unclicked"} onClick={click5}>***</p>
                <p className={ clicked6 ? "death-save-clicked" : "death-save-unclicked"} onClick={click6}>***</p>
            </div>
        </article>
    )
}

export default DeathSaves;