import { useState } from "react";
import { BiCheck } from "react-icons/bi";
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
				<div className="flex items-center justify-center">
					<div
						className={
							"box w-4 h-4  hover:bg-gray-300 transition-all flex items-center justify-center mr-2 " +
							(isCompleted ? "bg-blue-500" : "bg-gray-400")
						}
						onClick={() => completeTodo(id)}
					>
						<BiCheck
							className={
								!isCompleted ? "hidden" : "" + "text-white"
							}
						/>
					</div>
					<p
						className={
							"title text-lg font-bold transition " +
							(isCompleted === true
								? "line-through text-gray-400"
								: "")
						}
					>
						{title}
					</p>
				</div>
			) : (
				<input
					type="text"
					autoFocus={true}
					className={"border-b-2 py-2 outline-none"}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			)}
			<div className="actions flex w-4/12 justify-between">
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
