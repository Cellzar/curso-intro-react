import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

export const TodoSearch = () => {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onChangeInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <>
            <input
                value={searchValue}
                onChange={onChangeInput}
                type="text"
                className="TodoSearch"
                placeholder="Cebolla" />
        </>
    )
}
