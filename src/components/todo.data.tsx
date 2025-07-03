interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner: string;
    age: number;
}

const TodoData = (props: IProps) => {
    const { todos, owner, age } = props;
    return (
        <div>
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>Status: {todo.isComplete ? "Completed" : "Pending"}</p>
                        <p>Owner: {owner}, Age: {age}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default TodoData;