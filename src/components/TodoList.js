import { useTodos } from "./TodoApp";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({ completeTodo, deleteTodo, editTodo }) => {
	const todos = useTodos();
	return (
		<div className="flex flex-col w-10/12 mt-4">
			{todos.map((todo) => {
				return (
					<TodoItem
						isCompleted={todo.isCompleted}
						key={todo.id}
						title={todo.title}
						id={todo.id}
						completeTodo={completeTodo}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				);
			})}
		</div>
	);
};

export default TodoList;
