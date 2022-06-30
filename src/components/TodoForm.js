import { useState } from "react";
import { useTodosActions } from "./TodoApp";

const TodoForm = () => {
	const [todo, setTodo] = useState("");
	/*
	
		get the index, find the item , 
		create new Item and say the item is equal to this now or actually use splice
	*/

	const dispatch = useTodosActions();
	const addTodo = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Math.floor(Math.random() * 1000),
			isCompleted: false,
			title: todo,
		};
		dispatch((oldValue) => [...oldValue, newTodo]);
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
