import React from "react";
import TodoItem from "./TodoItem";

interface TodoItem {
    id: number;
    text: string;
}

interface TodoProps {
    todos: TodoItem[];
    onMove: (id: number, direction: "up" | "down") => void;
}

const TodoList = ({ todos, onMove }: TodoProps): JSX.Element => {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => {
                return (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onMove={onMove}
                        isFirst={index === 0}
                        isLast={index + 1 === todos.length}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
