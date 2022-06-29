import { useTodos } from "./TodoApp";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const todos = useTodos();
	return (
		<div>
			{todos.map((todo) => {
				<TodoItem title={todo.title} />;
			})}
		</div>
	);
};

export default TodoList;
