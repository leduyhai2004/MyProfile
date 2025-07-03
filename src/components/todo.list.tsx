import TodoData from "./todo.data";

const ToDoList = () => {
    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Subscribe Youtube HoiDanIT",
            isComplete: true
        },
        {
            id: 3,
            title: "Learn English",
            isComplete: true
        },
    ]

    return (
        <div className="todo-list">
            <h2>To Do List</h2>
            <br />
            <TodoData todos={todos} owner={"duy hai"} age={21} />
        </div>
    )
}

export default ToDoList;