import React, { useContext } from 'react';
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../modal';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from '../TodoForm';
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';

export const AppUI = () => {

    const {
        error,
        loading,
        searchTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return (
        <>
            <TodoCounter />

            <TodoSearch />
            <CreateTodoButton />

            <TodoList>
                {error && <TodosError />}
                {loading && <TodosLoading />}
                {(!loading && !searchTodos.length) && <EmptyTodos />}
                {
                    searchTodos.map(
                        (todo) => <TodoItem
                            completed={todo.completed}
                            keys={todo.id}
                            text={todo.text}
                            onComplete={() => completeTodos(todo.id)}
                            onDelete={() => deleteTodos(todo.id)}
                        />
                    )
                }
            </TodoList>
            {
                (!!openModal) && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }

            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            >

            </CreateTodoButton>

        </>
    )
}
