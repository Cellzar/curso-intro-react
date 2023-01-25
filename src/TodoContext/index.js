import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    const [openModal, setOpenModal] = useState(false);

    let searchTodos = [];

    if (!searchValue.length >= 1) {
        searchTodos = todos;
    } else {
        searchTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const valueText = searchValue.toLowerCase();
            return todoText.includes(valueText);

        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
            id: Math.random()
        })
        saveTodos(newTodos);
    }

    const completeTodos = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodos = (id) => {
        const todoIndex = todos.filter(todo => todo.id !== id);
        const newTodos = [...todoIndex];
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            addTodo,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };