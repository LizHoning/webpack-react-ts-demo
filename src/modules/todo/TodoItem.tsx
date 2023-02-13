import React from "react";

interface TodoItemProps {
    id: number;
    text: string;
    onMove: (id: number, direction: "up" | "down") => void;
    isFirst: boolean;
    isLast: boolean;
}

const TodoItem = ({
    text,
    id,
    onMove,
    isFirst,
    isLast,
}: TodoItemProps): JSX.Element => {
    return (
        <div className="todo-item">
            <p>{text}</p>
            {!isFirst && <button onClick={() => onMove(id, "up")}>^</button>}
            {!isLast && <button onClick={() => onMove(id, "down")}>v</button>}
        </div>
    );
};

export default TodoItem;
