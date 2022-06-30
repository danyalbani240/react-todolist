import { useState } from "react";
import { useTodos, useTodosActions } from "./TodoApp";

const TodoForm = () => {
	const [todo, setTodo] = useState("");

	const dispatch = useTodosActions();
	const addTodo = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Math.floor(Math.random() * 1000),
			isCompleted: false,
			title: todo,
		};
		let old = [];
		dispatch((oldValue) => {
			old = oldValue;
			return [...oldValue, newTodo];
		});
		//set it to local storage :
		localStorage.setItem("todos", JSON.stringify([...old, newTodo]));
		setTodo("");
	};

	return (
		<form onSubmit={addTodo} className="flex items-center justify-center">
			<input
				className="p-3 focus:outline-violet-600 border border-violet-600  transition-all h-10"
				type={"text"}
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button
				type="submit"
				className="px-3 bg-violet-600 text-white active:bg-violet-700 text-center transition h-10"
			>
				add
			</button>
		</form>
	);
};

export default TodoForm;
