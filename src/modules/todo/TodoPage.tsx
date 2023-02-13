import React, { useState } from "react";
import style from "./TodoPage.module.scss";
import boxes from "../../assets/images/boxes.png";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const DUMMY_DATA = [
    { id: 1, text: "Do a thing" },
    { id: 2, text: "Hello do another thing" },
];

const Todo = () => {
    const [todoItems, updateItems] = useState(DUMMY_DATA);

    const handleAddTodo = (text: string): void => {
        updateItems((prevTodos) => {
            const id = prevTodos.length + 1;
            return [{ id, text }, ...prevTodos];
        });
    };

    const handleMoveTodo = (id: number, direction: "up" | "down"): void => {
        updateItems((prevTodos) => {
            const itemToMove = prevTodos.find((item) => item.id === id);
            if (!itemToMove) return prevTodos;

            const index = prevTodos.indexOf(itemToMove);
            const newIndex = direction === "up" ? index - 1 : index + 1;
            const filteredArray = prevTodos.filter(
                (item) => item !== itemToMove
            );

            return [
                ...filteredArray.slice(0, newIndex),
                itemToMove,
                ...filteredArray.slice(newIndex, filteredArray.length),
            ];
        });
    };

    return (
        <div>
            <h2 className={style.pageTitle}>This is a page</h2>
            <p>This is some text</p>
            <div className={style.items}>
                Some items
                <div className={style.firstItem}>Line 1</div>
                <div>Line 2</div>
                <img src={boxes} alt="Just some boxes" />
                <div className={style.box1}></div>
                <div className={style.box2}></div>
                <div className={style.box3}></div>
                <div className={style.icon}>face</div>
            </div>
            <AddTodo onAdd={handleAddTodo} />
            <TodoList todos={todoItems} onMove={handleMoveTodo} />
        </div>
    );
};

export default Todo;
