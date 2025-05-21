import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

//https://www.youtube.com/watch?v=qdCHEUaFhBk
//https://www.youtube.com/watch?v=DTBta08fXGU

function DataProvider({ children }) {
    const [currentData, setCurrentData] = useState(null);
    const [indexOne, setIndexOne] = useState("");
    const [indexTwo, setIndexTwo] = useState("");

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/2014/${indexOne}${indexTwo}`)
            .then(response => {
                if (!response.ok) {
                    throw Error("Data could not be fetched.");
                }
                return response.json();
            })
            .then(data => {
                setCurrentData(data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [indexOne, indexTwo])

    return (
        <DataContext.Provider value={{ setIndexOne, setIndexTwo, currentData }}>
            {children}
        </DataContext.Provider>
    )    
}

export default DataProvider;