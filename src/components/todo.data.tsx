interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;

    hanldeDelete: (id: number) => void;
}

const TodoData = (props: IProps) => {
    const { todos, owner = "unknown", age = "unknown" } = props;
    const { hanldeDelete } = props;

    return (
        <div className="todo-data">
            {
                todos.map((todo) => (
                    <div key={todo.id} className={`todo-item ${todo.isComplete ? 'completed' : ''}`}>
                        <h3>{todo.title}</h3>
                        <p>Status:
                            <span className={`todo-status ${todo.isComplete ? 'completed' : 'pending'}`}>
                                {todo.isComplete ? "Completed" : "Pending"}
                            </span>
                        </p>
                        <div className="todo-owner">Owner: {owner}, Age: {age}</div>
                        <button onClick={() => hanldeDelete(todo.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default TodoData;