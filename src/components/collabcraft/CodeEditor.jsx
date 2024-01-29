import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowsRotate,
	faCompress,
	faExpand,
} from "@fortawesome/free-solid-svg-icons";

let sampleCode = {
	plaintext: `
        This is a sample plaintext document.
        It can contain any plain text without any specific syntax.
        No programming language features or code structure here.
        Just plain text.
    `,
	javascript: `
        // JavaScript sample code
        function greet(name) {
            return "Hello, " + name + "!";
        }

        let person = "World";
        console.log(greet(person));
    `,
	python: `
        # Python sample code
        def greet(name):
            return "Hello, " + name + "!"

        person = "World"
        print(greet(person))
    `,
	java: `
        // Java sample code
        public class Greet {
            public static String greet(String name) {
                return "Hello, " + name + "!";
            }

            public static void main(String[] args) {
                String person = "World";
                System.out.println(greet(person));
            }
        }
    `,
	php: `
        <?php
        // PHP sample code
        function greet($name) {
            return "Hello, " . $name . "!";
        }

        $person = "World";
        echo greet($person);
        ?>
    `,
	ruby: `
        # Ruby sample code
        def greet(name)
            "Hello, #{name}!"
        end

        person = "World"
        puts greet(person)
    `,
	html: `
        <!-- HTML sample code -->
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello, World!</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
        </body>
        </html>
    `,
	css: `
        /* CSS sample code */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f0f0;
            color: #333;
            margin: 0;
            padding: 20px;
        }

        h1 {
            color: #007bff;
        }
    `,
	typescript: `
        // TypeScript sample code
        function greet(name: string): string {
            return "Hello, " + name + "!";
        }

        let person: string = "World";
        console.log(greet(person));
    `,
	go: `
        // Go sample code
        package main

        import "fmt"

        func greet(name string) string {
            return "Hello, " + name + "!"
        }

        func main() {
            person := "World"
            fmt.Println(greet(person))
        }
    `,
	csharp: `
        // C# sample code
        using System;

        class Greet {
            static string GreetPerson(string name) {
                return "Hello, " + name + "!";
            }

            static void Main() {
                string person = "World";
                Console.WriteLine(GreetPerson(person));
            }
        }
    `,
	swift: `
        // Swift sample code
        func greet(name: String) -> String {
            return "Hello, \(name)!"
        }

        let person = "World"
        print(greet(name: person))
    `,
	rust: `
        // Rust sample code
        fn greet(name: &str) -> String {
            format!("Hello, {}!", name)
        }

        fn main() {
            let person = "World";
            println!("{}", greet(person));
        }
    `,
	sql: `
        -- SQL sample code
        CREATE TABLE greetings (
            id INT PRIMARY KEY,
            message VARCHAR(255)
        );

        INSERT INTO greetings (id, message) VALUES (1, 'Hello, World!');

        SELECT message FROM greetings WHERE id = 1;
    `,
};

function CodeEditor({ darkMode, isMaximized, setIsMaximized }) {
	const editorRef = useRef(null);
	const [selectedLanguage, setSelectedLanguage] = useState("javascript");
	const [code, setCode] = useState(
		'console.log("Hello, React Monaco Editor!");'
	);

	const handleCodeChange = (newCode) => {
		sampleCode[selectedLanguage] = newCode;
		console.log("Code changed:", newCode);
	};
	const handelCodeClear = () => {
		sampleCode[selectedLanguage] = "";
		setCode("");
	};

	const handleLanguageChange = (event) => {
		setSelectedLanguage(event.target.value);
		setCode(sampleCode[event.target.value]);
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
