import React from 'react';
import './CreateTodoButton.css';

export const CreateTodoButton = (props) => {

    const onClickButton = () => {
        props.setOpenModal(state => !state);
    };

    return (
        <button
            onClick={onClickButton}
            className="CreateTodoButton">+</button>
    )
}
