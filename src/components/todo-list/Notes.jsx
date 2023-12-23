import React, { useEffect, useState, useRef } from "react";
import "../../styles/todo-list.css";

function Notes({ notes, setNotes }) {
	const [newTitle, setNewTitle] = useState("");
	const [newNote, setNewNote] = useState("");
	const [displayModel, setDisplayModel] = useState(false);
	const [displayNote, setDisplayNote] = useState(false);
	const [activeNote, setActiveNote] = useState({});

	const handleDisplayModel = () => {
		setDisplayModel(true);
	};
	const handleAddNote = () => {
		// Implement logic to add a new note
		const note = {
			id: notes.length + 1,
			title: newTitle,
			note: newNote,
		};
		setNotes([...notes, note]);

		setNewTitle("");
		setNewNote("");
		setDisplayModel(false);
	};

    const handleUpdateNote = () =>{

    }

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
					{notes.map((note) => (
						<div
							key={note.id}
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
							}}
							onClick={() => {
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
			{displayModel && (
				<div className="add-note-form">
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
					<div>
						{newTitle && newNote ? (
							<button onClick={handleAddNote} className="add-note shine">
								Add Note
							</button>
						) : (
							<button className="add-note shine">Add Note</button>
						)}
						<button
							className="add-note shine"
							onClick={() => {
								setNewTitle("");
								setNewNote("");
								setDisplayModel(false);
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			)}

{displayNote && (
				<div className="add-note-form">
					<label htmlFor="title">Title:</label>
					<input
						id="titles"
						placeholder="Enter Title..."
						type="text"
						value={activeNote.title}
						readOnly
					/>
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
					<div>
						{newTitle && newNote ? (
							<button onClick={handleUpdateNote} className="add-note shine">
								Add Note
							</button>
						) : (
							<button className="add-note shine">Edit Note</button>
						)}
						<button
							className="add-note shine"
							onClick={() => {
								setDisplayNote(false);
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Notes;
