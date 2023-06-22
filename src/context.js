import React, { createContext, useState } from 'react';
import { data } from './mock';

export const InfoContext = createContext();

const GlobalContext = ({ children }) => {
    const [values, setValues] = useState({
        name: "",
        status: "",
    });
    const [users, setUsers] = useState([
        ...data,
        localStorage.getItem('users')
    ]);
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState(null);




    const onSearch = (e) => {
        let filtered = data.filter((value) =>
            `${value[search]}`.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setUsers(filtered);
    };
    const onSelect = (e) => {
        setSearch(e.target.value);
        localStorage.setItem('search', search)
    };

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const onCreate = () => {
        let newUser = [
            ...users,
            {
                id: users.length + 1,
                name: values.name,
                status: values.status,
            }
        ]
        setUsers(newUser)
    };

    const onDelete = (ids) => {
        let filtered = users.filter((value) => value.id !== ids);
        setUsers(filtered);
        localStorage.setItem('users', JSON.stringify({ data: users.filter((value) => value.id !== ids) }))
    };

    const onUpdate = ({ id, name, status }, isActive) => {
        if (isActive) {
            let updated = users.map((value) =>
                value.id === select?.id
                    ? { ...value, name: values.name, status: values.status }
                    : value
            );
            setUsers(updated);
            setSelect(null);
        } else {
            setValues({
                name: name,
                status: status,
            });
            setSelect({ id, name, status });
        }
    };

    return (
        <InfoContext.Provider value={[users, onSearch, onChange, onSelect, select, values, onCreate, onDelete, onUpdate]}>
            {children}
        </InfoContext.Provider>
    )
}

export default GlobalContext;