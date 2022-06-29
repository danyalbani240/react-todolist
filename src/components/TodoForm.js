import { useState } from "react";
import { useTodosActions } from "./TodoApp";

const TodoForm = () => {
	const [todo, setTodo] = useState("");

	const dispatch = useTodosActions();
	const addTodo = () => {
		dispatch((oldValue) => [...oldValue, todo]);
	};
	return (
		<div className="flex items-center justify-center">
			<input
				className="p-3 focus:outline-violet-600 border border-violet-600  transition-all h-10"
				type={"text"}
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button
				onClick={addTodo}
				className="px-3 bg-violet-600 text-white active:bg-violet-700 text-center transition h-10"
			>
				add
			</button>
		</div>
	);
};

export default TodoForm;
