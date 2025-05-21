import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

//https://www.youtube.com/watch?v=qdCHEUaFhBk
//https://www.youtube.com/watch?v=DTBta08fXGU

function DataProvider({ children }) {
    const [ruleIndexOne, setRuleIndexOne] = useState("");
    const [ruleIndexTwo, setRuleIndexTwo] = useState("");
    const [currentData, setCurrentData] = useState(null);
    const [mainSectionData, setMainSectionData] = useState(null);
    const [subSectionData, setSubSectionData] = useState([{}]);
    const [otherRuleSection, setOtherRuleSection] = useState(null);
    const [otherRules, setOtherRules] = useState([{}]);
    const [otherRuleIndexOne, setOtherRuleIndexOne] = useState("");

    //For main set of rules
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/2014/${ruleIndexOne}${ruleIndexTwo}`)
            .then(response => {
                if (!response.ok) {
                    throw Error("Data could not be fetched.");
                }
                return response.json();
            })
            .then(data => {
                setMainSectionData(data);
                console.log(data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [ruleIndexOne, ruleIndexTwo])

    //For Sub rules
    useEffect(() => {
        setSubSectionData([{}]);
        if (mainSectionData != null) {
            if (mainSectionData.subsections != null) {
                for (let i = 0; i < mainSectionData.subsections.length; i++) {
                    fetch(`https://www.dnd5eapi.co/api/2014/rule-sections/${mainSectionData.subsections[i].index}`)
                    .then(response => {
                        if (!response.ok) {
                            throw Error("Data could not be fetched.");
                        }
                        return response.json();
                    })
                    .then(data => {
                        setSubSectionData((previousData) => [...previousData, data]);
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                }
            }
        }                
    }, [mainSectionData]);

    //For character rules list
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/2014/${otherRuleIndexOne}`)
            .then(response => {
                if (!response.ok) {
                    throw Error("Data could not be fetched.");
                }
                return response.json();
            })
            .then(data => {
                setOtherRuleSection(data);
                console.log(data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [otherRuleIndexOne]);

    //For written out other rules
    useEffect(() => {
        setOtherRules([{}]);
        if (otherRuleSection != null) {
            for (let i = 0; i < otherRuleSection.count; i++) {
                fetch(`https://www.dnd5eapi.co/api/2014/${otherRuleIndexOne}/${otherRuleSection.results[i].index}`)
                    .then(response => {
                        if (!response.ok) {
                            throw Error("Data could not be fetched.");
                        }
                        return response.json();
                    })
                    .then(data => {
                        setOtherRules((previousData) => [...previousData, data]);
                    })
                    .catch(error => {
                        console.log(error.message);
                    })          
            }
        }
    }, [otherRuleSection]);


    return (
        <DataContext.Provider value={{ mainSectionData, subSectionData, setRuleIndexOne, setRuleIndexTwo, setOtherRuleIndexOne, otherRules }}>
            {children}
        </DataContext.Provider>
    )    
}

export default DataProvider;