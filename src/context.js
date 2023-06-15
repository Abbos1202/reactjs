import React, { createContext, useState } from "react";

export const InfoContext = createContext();

const GlobalContext = ({ children }) => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const addOne = () => {
        setCount(count + 1)
    }

    const addTen = () => {
        setCount(count + 10)
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const addNum = () => {
        setCount(count + +name)
    }

    return (
        <InfoContext.Provider value={{ count, setCount, addOne, addTen, name, changeName, addNum }}>
            {children}
        </InfoContext.Provider>
    )
}

export default GlobalContext;