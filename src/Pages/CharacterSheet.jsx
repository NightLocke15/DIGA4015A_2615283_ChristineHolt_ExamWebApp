import React from "react";
import BasicInfo from "../Components/CharacterSheet/BasicInfo";
import '../Styles/CharacterSheet.css';
import ArmorInfo from "../Components/CharacterSheet/ArmorInfo";
import ScoreInfo from "../Components/CharacterSheet/ScoreInfo";
import MoneyInfo from "../Components/CharacterSheet/MoneyInfo";
import SkillInfo from "../Components/CharacterSheet/SkillInfo";
import Equipment from "../Components/CharacterSheet/Equipment";
import PersonalityIdealFlawBond from "../Components/CharacterSheet/PersonalityIdealFlawBond";
import SpellCastingInfo from "../Components/CharacterSheet/SpellCastingInfo";
import DeathSaves from "../Components/CharacterSheet/DeathSaves";

function CharacterSheet() {

    return(
        <section className="sheet">
            <BasicInfo />
            <article className="columns">
                <div className="section-one-col">
                    <ArmorInfo />
                    <MoneyInfo />
                </div>   
                <div className="section-two-col">
                    <ScoreInfo />             
                    <SkillInfo />     
                    <Equipment />
                </div>         
                <div className="section-three-col">
                    <PersonalityIdealFlawBond />
                    <SpellCastingInfo />   
                    <DeathSaves />
                </div>
            </article>                         
        </section>
    )

}

export default CharacterSheet;