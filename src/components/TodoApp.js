import { createContext, useContext, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList.js";
const TodosContext = createContext();
const TodosContextDispatch = createContext();
const TodoApp = () => {
	const [todos, setTodos] = useState([]);
	return (
		<TodosContext.Provider value={todos}>
			<TodosContextDispatch.Provider value={setTodos}>
				<div className="app-container flex flex-col justify-center items-center rounded-md p-5 border-2 border-gray-200">
					<TodoForm />
					<TodoList />
				</div>
			</TodosContextDispatch.Provider>
		</TodosContext.Provider>
	);
};

export default TodoApp;
export const useTodos = () => useContext(TodosContext);
export const useTodosActions = () => useContext(TodosContextDispatch);
