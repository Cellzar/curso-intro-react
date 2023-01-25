import React from 'react';
import './TodoList.css'

export const TodoList = (props) => {
    console.log("🚀 ~ file: TodoList.js:4 ~ TodoList ~ props", props)
    return (
        <section>

            <ul>
                {props.children}
            </ul>
        </section>
    )
}
