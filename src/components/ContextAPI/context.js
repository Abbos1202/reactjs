import React, {createContext, useState} from "react";

export const UserContext = createContext();

export const Context = ({children}) => {
    const [name, setName] = useState('Abbosbek');

    return (
        <UserContext.Provider value={[name]}>
            {children}
        </UserContext.Provider>
    )

}