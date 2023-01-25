import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

export const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = useState('');
    const { addTodo, setOpenModal } = useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = ({ target }) => {
        setNewTodoValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='cortar cebolla'
                rows="" cols=""></textarea>

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </ button>
            </div>
        </form>
    )
}
