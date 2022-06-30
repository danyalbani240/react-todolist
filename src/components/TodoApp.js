import { createContext, useContext, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList.js";
const TodosContext = createContext();
const TodosContextDispatch = createContext();
const TodoApp = () => {
	const [todos, setTodos] = useState(
		localStorage.todos === undefined ? [] : JSON.parse(localStorage.todos)
	);

	const completeTodo = (id) => {
		const index = todos.findIndex((item) => item.id === id);

		const clonedTodos = [...todos];

		clonedTodos[index].isCompleted = !clonedTodos[index].isCompleted;

		setTodos([...clonedTodos]);
		localStorage.setItem("todos", JSON.stringify([...clonedTodos]));
	};
	const deleteTodo = (id) => {
		const index = todos.findIndex((item) => item.id === id);

		const clonedTodos = [...todos];
		clonedTodos.splice(index, index + 1);

		setTodos([...clonedTodos]);
		localStorage.setItem("todos", JSON.stringify([...clonedTodos]));
	};
	const editTodo = (id, value) => {
		const index = todos.findIndex((item) => item.id === id);

		const clonedTodos = [...todos];

		clonedTodos[index].title = value;

		setTodos([...clonedTodos]);
		localStorage.setItem("todos", JSON.stringify([...clonedTodos]));
	};
	return (
		<TodosContext.Provider value={todos}>
			<TodosContextDispatch.Provider value={setTodos}>
				<div className="app-container flex flex-col justify-center items-center rounded-md p-5 border-2 border-gray-200">
					<TodoForm />
					<TodoList
						completeTodo={completeTodo}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				</div>
			</TodosContextDispatch.Provider>
		</TodosContext.Provider>
	);
};

export default TodoApp;
export const useTodos = () => useContext(TodosContext);
export const useTodosActions = () => useContext(TodosContextDispatch);
