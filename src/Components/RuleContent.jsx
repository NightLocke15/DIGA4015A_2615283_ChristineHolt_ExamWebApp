import React, { useContext } from "react";
import { DataContext } from "../Context/Data/DataContext";

function RuleContent() {
    const { currentData } = useContext(DataContext);

    return (
        <p>{currentData}</p>
    )
}

export default RuleContent;