import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowsRotate,
	faCompress,
	faExpand,
} from "@fortawesome/free-solid-svg-icons";


const useDebounce = (func, delay) => {
	const timeoutRef = useRef(null);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	const debouncedFunction = (...args) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			func(...args);
		}, delay);
	};

	return debouncedFunction;
};

function CodeEditor({ darkMode, isMaximized, setIsMaximized, socketRef }) {
	const editorRef = useRef(null);
	const [selectedLanguage, setSelectedLanguage] = useState("javascript");
	const [code, setCode] = useState('console.log("Hello world!");');

	useEffect(() => {
		socketRef.current.on("codeChange", (code) => {
			console.log(code);
			setCode(code.message);
		});
	}, []);

	const handleCodeChange = useDebounce((newCode) => {
		socketRef.current.emit("codeChange", newCode);
	}, 1000);
	const handelCodeClear = () => {
		setCode("");
	};

	const handleLanguageChange = (event) => {
		setSelectedLanguage(event.target.value);
	};

	const toggleMaximize = () => {
		const divElement = editorRef.current;

		setIsMaximized((pre) => !pre);

		if (divElement) {
			if (document.fullscreenElement) {
				document.exitFullscreen();
			} else {
				divElement.requestFullscreen().catch((err) => {
					console.error(
						"Error attempting to enable full-screen mode:",
						err
					);
				});
			}
		}
	};

	return (
		<div style={{ width: "100%", padding: "0px 10px" }}>
			<div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
				<select
					id="languageSelect"
					value={selectedLanguage}
					onChange={handleLanguageChange}
				>
					<option value="plaintext">plaintext</option>
					<option value="javascript">javascript</option>
					<option value="python">python</option>
					<option value="java">java</option>
					<option value="php">php</option>
					<option value="ruby">ruby</option>
					<option value="html">html</option>
					<option value="css">css</option>
					<option value="typescript">typescript</option>
					<option value="go">go</option>
					<option value="csharp">csharp</option>
					<option value="swift">swift</option>
					<option value="rust">rust</option>
					<option value="sql">sql</option>
				</select>
				<button onClick={handelCodeClear}>
					<FontAwesomeIcon icon={faArrowsRotate} size="lg" />
					clear
				</button>
			</div>
			<div
				id="codeEditor"
				ref={editorRef}
				style={{ border: "1px solid black", overflow: "hidden" }}
			>
				<button onClick={toggleMaximize}>
					{isMaximized ? (
						<FontAwesomeIcon icon={faCompress} size="xl" />
					) : (
						<FontAwesomeIcon icon={faExpand} size="xl" />
					)}
				</button>
				<Editor
					width="100%"
					height="100%"
					theme={darkMode ? "vs-dark" : "light"}
					language={selectedLanguage}
					value={code}
					onChange={handleCodeChange}
				/>
			</div>
		</div>
	);
}

export default CodeEditor;
