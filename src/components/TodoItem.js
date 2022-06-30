import { useState } from "react";

const TodoItem = ({
	title,
	isCompleted,
	id,
	completeTodo,
	deleteTodo,
	editTodo,
}) => {
	const [isEdit, setEdit] = useState(false);
	const [value, setValue] = useState(title);
	const edit = () => {
		if (isEdit === false) {
			setEdit(!isEdit);
		} else {
			editTodo(id, value);
			setEdit(!isEdit);
		}
	};
	return (
		<div
			className={
				"todo-container border-b-2 py-2 px-2 transition-all  flex w-full justify-between my-3 items-center " +
				(isCompleted ? "border-red-200" : "border-red-300")
			}
		>
			{!isEdit ? (
				<p
					className={
						"title text-lg font-bold transition " +
						(isCompleted === true
							? "line-through text-gray-400"
							: "")
					}
					onClick={() => completeTodo(id)}
				>
					{title}
				</p>
			) : (
				<input
					type="text"
					autoFocus={true}
					className={"border-b-2 py-2 outline-none"}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			)}
			<div className="actions flex w-6/12 justify-between">
				<button
					onClick={() => deleteTodo(id)}
					className="bg-violet-600 text-white p-2 rounded"
				>
					Delete
				</button>

				<button
					onClick={edit}
					className="bg-violet-600 text-white p-2 rounded"
				>
					{!isEdit ? "Edit" : "Add"}
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
