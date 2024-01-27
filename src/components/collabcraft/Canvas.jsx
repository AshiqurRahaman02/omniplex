import React from 'react'
import {
	CanvasPath,
	ExportImageType,
	ReactSketchCanvas,
	ReactSketchCanvasProps,
	ReactSketchCanvasRef,
} from "react-sketch-canvas";

import "../../styles/collabcraft.css"

function InputField({ fieldName, type = "text", canvasProps, setCanvasProps }) {
	const handleChange = ({ target }) => {
		setCanvasProps((prevCanvasProps) => ({
			...prevCanvasProps,
			[fieldName]: target.value,
		}));
	};

	const id = "validation" + fieldName;

	return (
		<div className="p-2 col-10">
			<label htmlFor={id} className="form-label">
				{fieldName}
			</label>
			<input
				name={fieldName}
				type={type}
				className="form-control"
				id={id}
				value={canvasProps[fieldName]}
				onChange={handleChange}
				min={1}
				max={30}
			/>
		</div>
	);
}

function Canvas() {

    const [canvasProps, setCanvasProps] = React.useState({
		className: "react-sketch-canvas",
		width: "100%",
		height: "500px",
		backgroundImage:
			"https://upload.wikimedia.org/wikipedia/commons/7/70/Graph_paper_scan_1600x1000_%286509259561%29.jpg",
		preserveBackgroundImageAspectRatio: "none",
		strokeWidth: 5,
		eraserWidth: 5,
		strokeColor: "#000000",
		canvasColor: "#FFFFFF",
		style: { borderRight: "1px solid #CCC" },
		svgStyle: {},
		exportWithBackgroundImage: true,
		withTimestamp: true,
		allowOnlyPointerType: "all",
	});

	const inputProps = [
		["className", "text"],
		["width", "text"],
		["height", "text"],
		["backgroundImage", "text"],
		["preserveBackgroundImageAspectRatio", "text"],
		["strokeWidth", "range"],
		["eraserWidth", "range"],
	];

	const canvasRef = React.createRef();

	const [dataURI, setDataURI] = React.useState("");
	const [svg, setSVG] = React.useState("");
	const [paths, setPaths] = React.useState([]);
	const [lastStroke, setLastStroke] = React.useState({
		stroke: null,
		isEraser: null,
	});
	const [pathsToLoad, setPathsToLoad] = React.useState("");
	const [sketchingTime, setSketchingTime] = React.useState(0);
	const [exportImageType, setexportImageType] = React.useState("png");

	const imageExportHandler = async () => {
		const exportImage = canvasRef.current?.exportImage;

		if (exportImage) {
			const exportedDataURI = await exportImage(exportImageType);
			setDataURI(exportedDataURI);
		}
	};

	const svgExportHandler = async () => {
		const exportSvg = canvasRef.current?.exportSvg;

		if (exportSvg) {
			const exportedDataURI = await exportSvg();
			setSVG(exportedDataURI);
		}
	};

	const getSketchingTimeHandler = async () => {
		const getSketchingTime = canvasRef.current?.getSketchingTime;

		try {
			if (getSketchingTime) {
				const currentSketchingTime = await getSketchingTime();
				setSketchingTime(currentSketchingTime);
			}
		} catch {
			setSketchingTime(0);
			console.error("With timestamp is disabled");
		}
	};

	const penHandler = () => {
		const eraseMode = canvasRef.current?.eraseMode;

		if (eraseMode) {
			eraseMode(false);
		}
	};

	const eraserHandler = () => {
		const eraseMode = canvasRef.current?.eraseMode;

		if (eraseMode) {
			eraseMode(true);
		}
	};

	const undoHandler = () => {
		const undo = canvasRef.current?.undo;

		if (undo) {
			undo();
		}
	};

	const redoHandler = () => {
		const redo = canvasRef.current?.redo;

		if (redo) {
			redo();
		}
	};

	const clearHandler = () => {
		const clearCanvas = canvasRef.current?.clearCanvas;

		if (clearCanvas) {
			clearCanvas();
		}
	};

	const resetCanvasHandler = () => {
		const resetCanvas = canvasRef.current?.resetCanvas;

		if (resetCanvas) {
			resetCanvas();
		}
	};

	const createButton = (label, handler, themeColor) => (
		<button
			key={label}
			className={`btn btn-${themeColor} btn-block`}
			type="button"
			onClick={handler}
		>
			{label}
		</button>
	);

	const buttonsWithHandlers = [
		["Undo", undoHandler, "primary"],
		["Redo", redoHandler, "primary"],
		["Clear All", clearHandler, "primary"],
		["Reset All", resetCanvasHandler, "primary"],
		["Pen", penHandler, "secondary"],
		["Eraser", eraserHandler, "secondary"],
		// ["Export Image", imageExportHandler, "success"],
		// ["Export SVG", svgExportHandler, "success"],
		// ["Get Sketching time", getSketchingTimeHandler, "success"],
	];

	const onChange = (updatedPaths) => {
		setPaths(updatedPaths);
	};


  return (
    <main className="container-fluid p-5">
			
			<div className="row">
				<aside className="col-3 border-right">
					<header className="my-5">
						<h3>Props</h3>
					</header>
					<form>
						{inputProps.map(([fieldName, type]) => (
							<InputField
								key={fieldName}
								fieldName={fieldName}
								type={type}
								canvasProps={canvasProps}
								setCanvasProps={setCanvasProps}
							/>
						))}
						<div className="p-2 col-10 d-flex ">
							<div>
								<label
									htmlFor="strokeColorInput"
									className="form-label"
								>
									strokeColor
								</label>
								<input
									type="color"
									name="strokeColor"
									className="form-control form-control-color"
									id="strokeColorInput"
									value={canvasProps.strokeColor}
									title="Choose stroke color"
									onChange={(e) => {
										setCanvasProps((prevCanvasProps) => ({
											...prevCanvasProps,
											strokeColor: e.target.value,
										}));
									}}
								></input>
							</div>
							<div className="mx-4">
								<label
									htmlFor="canvasColorInput"
									className="form-label"
								>
									canvasColor
								</label>
								<input
									name="canvasColor"
									type="color"
									className="form-control form-control-color"
									id="canvasColorInput"
									value={canvasProps.canvasColor}
									title="Choose stroke color"
									onChange={(e) => {
										setCanvasProps((prevCanvasProps) => ({
											...prevCanvasProps,
											backgroundImage: "",
											canvasColor: e.target.value,
										}));
									}}
								></input>
							</div>
						</div>
						
					</form>
				</aside>
				<section className="col-9">
					<header className="my-5">
						<h3>Canvas</h3>
					</header>
					<section className="row no-gutters canvas-area m-0 p-0">
						<div className="col-9 canvas p-0">
							<ReactSketchCanvas
								ref={canvasRef}
								onChange={onChange}
								onStroke={(stroke, isEraser) =>
									setLastStroke({ stroke, isEraser })
								}
								{...canvasProps}
							/>
						</div>
						<div className="col-3 panel">
							<div className="d-grid gap-2">
								{buttonsWithHandlers.map(
									([label, handler, themeColor]) =>
										createButton(label, handler, themeColor)
								)}
							</div>
						</div>
					</section>
				</section>
			</div>
		</main>
  )
}

export default Canvas
