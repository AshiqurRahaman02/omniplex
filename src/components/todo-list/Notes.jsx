import React, { useEffect, useState, useRef } from "react";
import "../../styles/todo-list.css";
import { todoListRoutes } from "../../routes/todo-list.route";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsisVertical,
	faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
	faPenToSquare,
	faTrashCan,
	faComments,
} from "@fortawesome/free-regular-svg-icons";

const notesArray = [
	{
		id: 1,
		title: "Machine Learning",
		note: "Machine learning is a subset of artificial intelligence that focuses on building systems that can learn from data.",
	},
	{
		id: 2,
		title: "Healthy Eating",
		note: "A balanced diet with a variety of nutrients is essential for maintaining good health and well-being.",
	},
	{
		id: 3,
		title: "History of Jazz",
		note: "Jazz originated in the late 19th to early 20th century in the United States and has since evolved into various subgenres.",
	},
	{
		id: 4,
		title: "Climate Change",
		note: "Climate change is a long-term change in the average weather patterns that have come to define Earth's local, regional, and global climates.",
	},
	{
		id: 5,
		title: "Digital Art",
		note: "Digital art involves creating visual works of art using digital technology, such as a computer or tablet.",
	},
	{
		id: 6,
		title: "The Human Brain",
		note: "The human brain is a complex organ responsible for various cognitive functions, including thinking, memory, and emotion.",
	},
	{
		id: 7,
		title: "Space Exploration",
		note: "Space exploration has led to numerous discoveries about the universe, planets, and other celestial bodies.",
	},
	{
		id: 8,
		title: "The Renaissance",
		note: "The Renaissance was a period in European history known for its cultural and artistic achievements, spanning roughly the 14th to the 17th century.",
	},
	{
		id: 9,
		title: "The Solar System",
		note: "Our solar system consists of the Sun and eight planets, including Earth.",
	},
	{
		id: 10,
		title: "Environmental Conservation",
		note: "Environmental conservation is the responsible use and management of natural resources to ensure their sustainability for future generations.",
	},
];

function Notes({ todoList, setTodoList, token, userId, notify }) {
	const [newTitle, setNewTitle] = useState("");
	const [newNote, setNewNote] = useState("");
	const [displayAddNote, setDisplayAddNote] = useState(false);
	const [displayNote, setDisplayNote] = useState(false);
	const [activeNote, setActiveNote] = useState({});
	const [updateNote, setUpdateNote] = useState(false);

	const handleDisplayModel = () => {
		setDisplayAddNote(true);
	};
	const handleAddNote = () => {
		if (!newTitle) {
			notify("Please enter a title", "warning");
			return;
		}

		const note = {
			title: newTitle,
			note: newNote || "",
		};

		fetch(todoListRoutes.addNote, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify(note),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTodoList(res.todoList);
					setNewTitle("");
					setNewNote("");
					setDisplayAddNote(false);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

	const handleUpdateNote = () => {

		if (!activeNote.title) {
			notify("Please enter a title", "warning");
			return;
		}

		let notes = todoList.notes
		notes[activeNote.index].title = activeNote.title;
		notes[activeNote.index].note = activeNote.note;


		fetch(todoListRoutes.updateNote, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify({notes}),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTodoList(res.todoList);
					setUpdateNote(false)
					setDisplayNote(false);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
				setUpdateNote(false)
					setDisplayNote(false);
			});
	};

	const handelDeleteNote = (index) => {

		fetch(`${todoListRoutes.deleteNote}${index}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			}
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					notify(res.message, "success");
					setTodoList(res.todoList);
					setUpdateNote(false)
					setDisplayNote(false);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
				setUpdateNote(false)
					setDisplayNote(false);
			});
	};

	const noteContainerRef = useRef(null);

	const handlePrev = () => {
		noteContainerRef.current.scrollLeft -=
			noteContainerRef.current.offsetWidth;
	};

	const handleNext = () => {
		noteContainerRef.current.scrollLeft +=
			noteContainerRef.current.offsetWidth;
	};
	return (
		<div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<button onClick={handlePrev} id="pre" className="shine">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
						/>
					</svg>
				</button>
				<div id="notes" ref={noteContainerRef}>
					{todoList.notes.length > 0 &&
						todoList.notes.map((note, index) => (
							<div
								key={index}
								style={{
									margin: "10px",
									minWidth: "200px",
									maxWidth: "200px",
									maxHeight: "200px",
									padding: "10px",
									border: "1px solid #ccc",
									borderRadius: "5px",
									cursor: "pointer",
									overflow: "hidden",
									position: "relative",
								}}
								onClick={() => {
									note.index = index;
									setActiveNote(note);
									setDisplayNote(true);
								}}
							>
								<h3>{note.title}</h3>
								<p>{note.note}</p>
							</div>
						))}
					<button onClick={handleDisplayModel} className="add-note shine">
						Add Note
					</button>
				</div>
				<button onClick={handleNext} id="next" className="shine">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
						/>
					</svg>
				</button>
			</div>
			{displayAddNote && (
				<div className="add-note-form">
					<div>
						<h3>Add Note</h3>
						<label htmlFor="title">Title:</label>
						<input
							id="titles"
							placeholder="Enter Title..."
							type="text"
							value={newTitle}
							required
							onChange={(e) => setNewTitle(e.target.value)}
						/>
						<br />
						<label htmlFor="note">Note:</label>
						<textarea
							id="note"
							placeholder="Enter Note..."
							value={newNote}
							name="note"
							cols="30"
							rows="8"
							required
							onChange={(e) => setNewNote(e.target.value)}
						></textarea>
					</div>
					<div>
						<button onClick={handleAddNote} className="add-note shine">
							Add Note
						</button>
						<button
							className="add-note shine"
							onClick={() => {
								setNewTitle("");
								setNewNote("");
								setDisplayAddNote(false);
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			)}

			{displayNote && (
				<div className="add-note-form">
					{updateNote ? (
						<div>
							<label htmlFor="title">Title:</label>
							<input
								id="titles"
								placeholder="Enter Title..."
								type="text"
								value={activeNote.title}
								onChange={(e) => {
									setActiveNote({
										...activeNote,
										title: e.target.value,
									});
								}}
							/>
							<br />
							<label htmlFor="note">Note:</label>
							<textarea
								id="note"
								placeholder="Enter Note..."
								value={activeNote.note}
								onChange={(e) =>
									setActiveNote({
										...activeNote,
										note: e.target.value,
									})
								}
								name="note"
								cols="30"
								rows="8"
							></textarea>
						</div>
					) : (
						<div>
							<label htmlFor="title">Title:</label>
							<input
								id="titles"
								placeholder="Enter Title..."
								type="text"
								value={activeNote.title}
								readOnly
							/>
							<br />
							<label htmlFor="note">Note:</label>
							<textarea
								id="note"
								placeholder="Enter Note..."
								value={activeNote.note}
								name="note"
								cols="30"
								rows="8"
								readOnly
							></textarea>
						</div>
					)}
					<div>
						{updateNote ? (
							<button
								className="add-note shine"
								onClick={handleUpdateNote}
							>
								Update
							</button>
						) : (
							<button
								className="add-note shine"
								onClick={() => setUpdateNote(true)}
							>
								Edit Note
							</button>
						)}
						<button
							className="add-note shine"
							onClick={() => {
								setUpdateNote(false);
								setDisplayNote(false);
							}}
						>
							Cancel
						</button>
					</div>
					<div>
					<button
							className="add-note shine"
							onClick={() => {
								notify("Feature not live yet", "info")
							}}
						>
							Pin Note
						</button>
						<button
							className="add-note shine"
							onClick={() => {
								handelDeleteNote(activeNote.index)
							}}
						>
							Delete Note
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Notes;
