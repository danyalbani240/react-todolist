import TodoApp from "./components/TodoApp";
import "./App.css";
const App = () => {
	return (
		<div className="App w-screen flex flex-col items-center mt-5 px-2.5">
			<h1 className="text-2xl font-bold mb-8">TodoList - Danyal</h1>
			<TodoApp />
		</div>
	);
};

export default App;
