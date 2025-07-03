import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";
interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}
const ToDoList = () => {
    // const todos = [
    //     {
    //         id: 1,
    //         title: "Learn React TypeScript",
    //         isComplete: false
    //     },
    //     {
    //         id: 2,
    //         title: "Subscribe Youtube HoiDanIT",
    //         isComplete: true
    //     },
    //     {
    //         id: 3,
    //         title: "Learn English",
    //         isComplete: true
    //     },
    // ]

    const [listTodos, setListTodos] = useState<ITodo[]>([]);

    const addNewTodo = (newTodo: ITodo) => {
        setListTodos([...listTodos, newTodo]);
    };
    const hanldeDelete = (id: number) => {
        // Logic to delete the todo item by id
        const newList = listTodos.filter(todo => todo.id !== id);
        // Update the state with the new list
        setListTodos(newList);
        console.log(`Delete todo with id: ${id}`);
    };
    return (
        <div className="todo-list">
            <h2>To Do List</h2>
            <br />
            <TodoInput name="type your information" addNewTodo={addNewTodo} />
            <TodoData todos={listTodos} owner={"duy hai"} age={21} hanldeDelete={hanldeDelete} />
        </div>
    )
}

export default ToDoList;