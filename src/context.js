import React, {createContext, useState} from "react";
import { data } from './mock';

export const Movie = createContext();

export const Context = ({children}) => {
    const [info, setInfo] = useState(data);

    return (
        <Movie.Provider value={[info, setInfo]}>
            {children}
        </Movie.Provider>
    )

}