import React, { useRef } from "react";

interface AddTodoProps {
    onAdd: (newTodo: string) => void;
}

const AddTodo = ({ onAdd }: AddTodoProps): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (inputRef.current?.value) {
            onAdd(inputRef.current.value);
            inputRef.current.value = "";
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
                <button id="btn">Click me</button>
            </form>
        </div>
    );
};

export default AddTodo;
