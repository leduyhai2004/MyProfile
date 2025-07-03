import { useState } from "react";
interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}
interface Iprops {
    name?: string;
    addNewTodo: (value: ITodo) => void;
}



const TodoInput = (props: Iprops) => {
    //string
    const [todos, setTodos] = useState<string>("");

    const { addNewTodo } = props;
    const handleClick = () => {
        if (todos.trim() === "") {
            alert("Please enter a task");
            return;
        }
        addNewTodo({
            id: Math.floor(Math.random() * 1000), // Random ID for simplicity
            title: todos,
            isComplete: false
        })
        setTodos(""); // Clear input after adding
    }
    return (
        <div className="todo-input">
            <input value={todos}
                type="text"
                onChange={(e) => setTodos(e.target.value)}
                placeholder="Add a new task..." />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}
export default TodoInput;