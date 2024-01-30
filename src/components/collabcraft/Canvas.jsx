import {
	faArrowsRotate,
	faChevronRight,
	faCompress,
	faDownload,
	faEraser,
	faExpand,
	faImage,
	faPen,
	faRotateLeft,
	faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slider, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Draggable from 'react-draggable';
import {
	CanvasPath,
	ExportImageType,
	ReactSketchCanvas,
	ReactSketchCanvasProps,
	ReactSketchCanvasRef,
} from "react-sketch-canvas";

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

const graphBackgroundImage = {
	dark: "https://media.istockphoto.com/id/186196340/vector/black-graph-paper-background.jpg?s=612x612&w=0&k=20&c=UpwOIphmFumrRbt3n-dkkIYRr2ZuJhnuKSHvwLl74HE=",
	light: "https://upload.wikimedia.org/wikipedia/commons/7/70/Graph_paper_scan_1600x1000_%286509259561%29.jpg",
};

function Canvas({ darkMode, isMaximized, setIsMaximized }) {
	const [canvasProps, setCanvasProps] = React.useState({
		className: "react-sketch-canvas",
		width: "100%",
		height: "100%",
		// backgroundImage:
		// 	"https://upload.wikimedia.org/wikipedia/commons/7/70/Graph_paper_scan_1600x1000_%286509259561%29.jpg",
		preserveBackgroundImageAspectRatio: "cover",
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
	const [displayTools, setDisplayTools] = useState(true);
	const [eraseMode, setEraseMode] = useState(false);

	const inputProps = [
		["backgroundImage", "text"],
		["strokeWidth", "range"],
		["eraserWidth", "range"],
	];

	const canvasDivRef = useRef();
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
			setEraseMode(false);
		}
	};

	const eraserHandler = () => {
		const eraseMode = canvasRef.current?.eraseMode;

		if (eraseMode) {
			eraseMode(true);
			setEraseMode(true);
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
		["Export Image", imageExportHandler, "success"],
		["Export SVG", svgExportHandler, "success"],
		["Get Sketching time", getSketchingTimeHandler, "success"],
	];

	const onChange = (updatedPaths) => {
		setPaths(updatedPaths);
	};

	const toggleMaximize = () => {
		const divElement = canvasDivRef.current;

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

	const downloadImage = async (photo) => {
		if (!paths.length) {
			alert("No paths specified for image download");
			return;
		} else if (!isMaximized) {
			alert("Download image in maximized mode");
		} else {
			const exportImage = canvasRef.current?.exportImage;

			if (exportImage) {
				const exportedDataURI = await exportImage(exportImageType);
				setDataURI(exportedDataURI);

				const response = await fetch(exportedDataURI);

				const file = await response.blob();
				const link = document.createElement("a");
				link.href = URL.createObjectURL(file);
				link.download = `image${new Date().getTime()}`;
				link.click();
			}
		}
	};

	  

	return (
		<div style={{ width: "100%", padding: "0px 10px" }}>
			<div>
				<button style={{ visibility: "hidden" }}></button>
			</div>
			<div ref={canvasDivRef} id="canvasDiv">
				<Draggable
				>
					<div>
					<div
						id="canvas-tools"
						style={{
							position: "relative",
							display: "flex",
							gap: "5px",
							transition: "2s",
							opacity: displayTools ? 1 : 0,
						}}
					>
						<button
							style={{
								position: "absolute",
								right: displayTools ? "225px" : "-45px",
								transition: "1.9s",
							}}
							onClick={undoHandler}
							title="Undo drawing"
						>
							<FontAwesomeIcon icon={faRotateLeft} size="lg" />
						</button>
						<button
							style={{
								position: "absolute",
								right: displayTools ? "180px" : "-45px",
								transition: "1.6s",
							}}
							onClick={redoHandler}
							title="Redo drawing"
						>
							<FontAwesomeIcon icon={faRotateRight} size="lg" />
						</button>
						<button
							style={{
								position: "absolute",
								right: displayTools ? "135px" : "-45px",
								transition: "1.3s",
							}}
							onClick={clearHandler}
							title="Clear drawing"
						>
							<FontAwesomeIcon icon={faArrowsRotate} size="lg" />
						</button>
						<button
							style={{
								position: "absolute",
								right: displayTools ? "90px" : "-45px",
								transition: "1s",
							}}
							onClick={penHandler}
							title="Select pen"
						>
							<FontAwesomeIcon icon={faPen} size="lg" />
						</button>
						<button
							style={{
								position: "absolute",
								right: displayTools ? "45px" : "-45px",
								transition: ".7s",
							}}
							onClick={eraserHandler}
							title="Select eraser"
						>
							<FontAwesomeIcon icon={faEraser} size="lg" />
						</button>
						<button
							onClick={downloadImage}
							title="Download image"
							style={{
								position: "absolute",
								right: displayTools ? "0px" : "-45px",
								transition: ".4s",
							}}
						>
							<FontAwesomeIcon icon={faDownload} size="lg" />
						</button>
					</div>
					<button
						onClick={() => setDisplayTools((pre) => !pre)}
						style={{ zIndex: "15" }}
						title={displayTools ? "Hide tools" : "Display tools"}
					>
						<FontAwesomeIcon
							icon={faChevronRight}
							style={{ transition: "1s" }}
							rotation={displayTools ? 0 : 180}
							size="xl"
						/>
					</button>
					<input
						style={{ zIndex: "15" }}
						type="color"
						name="strokeColor"
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
					<input
						style={{ zIndex: "15" }}
						name="canvasColor"
						type="color"
						id="canvasColorInput"
						value={canvasProps.canvasColor}
						title="Choose canvas color"
						onChange={(e) => {
							setCanvasProps((prevCanvasProps) => ({
								...prevCanvasProps,
								backgroundImage: "",
								canvasColor: e.target.value,
							}));
						}}
					></input>
					<button
						onClick={toggleMaximize}
						style={{ zIndex: "15" }}
						title={isMaximized ? "Minimize canvas" : "Maximize canvas"}
					>
						{isMaximized ? (
							<FontAwesomeIcon icon={faCompress} size="xl" />
						) : (
							<FontAwesomeIcon icon={faExpand} size="xl" />
						)}
					</button>
					<div
						id="input"
						style={{
							top: displayTools ? "45px" : "-20px",
							opacity: displayTools ? "1" : "0",
							transition: "1s",
						}}
					>
						{eraseMode ? (
							<>
								<Typography
									id="non-linear-slider"
									gutterBottom
									style={{
										position: "relative",
										left: "-10px",
										color: canvasProps.strokeColor,
									}}
								>
									Eraser Width: {canvasProps.strokeWidth}
								</Typography>
								<Slider
									value={canvasProps.eraserWidth}
									min={1}
									step={1}
									max={50}
									onChange={(e) =>
										setCanvasProps((prevCanvasProps) => ({
											...prevCanvasProps,
											eraserWidth: e.target.value,
										}))
									}
									valueLabelDisplay="auto"
									aria-labelledby="non-linear-slider"
									style={{ color: canvasProps.strokeColor }}
								/>
							</>
						) : (
							<>
								<Typography
									id="non-linear-slider"
									gutterBottom
									style={{
										position: "relative",
										left: "-10px",
										color: canvasProps.strokeColor,
									}}
								>
									Stroke Width: {canvasProps.strokeWidth}
								</Typography>
								<Slider
									value={canvasProps.strokeWidth}
									min={1}
									step={1}
									max={50}
									onChange={(e) =>
										setCanvasProps((prevCanvasProps) => ({
											...prevCanvasProps,
											strokeWidth: e.target.value,
										}))
									}
									valueLabelDisplay="auto"
									aria-labelledby="non-linear-slider"
									style={{ color: canvasProps.strokeColor }}
								/>
							</>
						)}
					</div>
					</div>
				</Draggable>

				<ReactSketchCanvas
					ref={canvasRef}
					onChange={onChange}
					onStroke={(stroke, isEraser) =>
						setLastStroke({ stroke, isEraser })
					}
					{...canvasProps}
				/>
			</div>
			{/* <div className="row">
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
						<div className="p-2 col-10">
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									role="switch"
									id="switchExportWithBackgroundImage"
									checked={canvasProps.exportWithBackgroundImage}
									onChange={(e) => {
										setCanvasProps((prevCanvasProps) => ({
											...prevCanvasProps,
											exportWithBackgroundImage: e.target.checked,
										}));
									}}
								/>
								<label
									className="form-check-label"
									htmlFor="switchExportWithBackgroundImage"
								>
									exportWithBackgroundImage
								</label>
							</div>
						</div>
						<div className="p-2 col-10">
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									role="switch"
									id="switchWithTimestamp"
									checked={canvasProps.withTimestamp}
									onChange={(e) => {
										setCanvasProps((prevCanvasProps) => ({
											...prevCanvasProps,
											withTimestamp: e.target.checked,
										}));
									}}
								/>
								<label
									className="form-check-label"
									htmlFor="switchWithTimestamp"
								>
									withTimestamp
								</label>
							</div>
						</div>
						<div className="p-2">
							<label
								className="form-check-label"
								htmlFor="exportImageType"
							>
								exportImageType
							</label>
							<div id="exportImageType" className="pt-2">
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="exportImageType"
										id="exportImageTypePng"
										value="png"
										checked={exportImageType === "png"}
										onChange={() => {
											setexportImageType("png");
										}}
									/>
									<label
										className="form-check-label"
										htmlFor="exportImageTypePng"
									>
										png
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="exportImageType"
										id="exportImageTypeJPEG"
										value="touch"
										checked={exportImageType === "jpeg"}
										onChange={() => {
											setexportImageType("jpeg");
										}}
									/>
									<label
										className="form-check-label"
										htmlFor="exportImageTypeJPEG"
									>
										jpeg
									</label>
								</div>
							</div>
						</div>
						<div className="p-2">
							<label
								className="form-check-label"
								htmlFor="allowOnlyPointerType"
							>
								allowOnlyPointerType
							</label>
							<div id="allowOnlyPointerType" className="p-2">
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="allowPointer"
										id="allowPointerAll"
										value="all"
										checked={
											canvasProps.allowOnlyPointerType === "all"
										}
										onChange={() => {
											setCanvasProps((prevCanvasProps) => ({
												...prevCanvasProps,
												allowOnlyPointerType: "all",
											}));
										}}
									/>
									<label
										className="form-check-label"
										htmlFor="allowPointerAll"
									>
										all
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="allowPointer"
										id="allowPointerTouch"
										value="touch"
										checked={
											canvasProps.allowOnlyPointerType === "touch"
										}
										onChange={() => {
											setCanvasProps((prevCanvasProps) => ({
												...prevCanvasProps,
												allowOnlyPointerType: "touch",
											}));
										}}
									/>
									<label
										className="form-check-label"
										htmlFor="allowPointerTouch"
									>
										touch
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="allowPointer"
										id="allowPointerMouse"
										value="mouse"
										checked={
											canvasProps.allowOnlyPointerType === "mouse"
										}
										onChange={() => {
											setCanvasProps((prevCanvasProps) => ({
												...prevCanvasProps,
												allowOnlyPointerType: "mouse",
											}));
										}}
									/>
									<label
										className="form-check-label"
										htmlFor="allowPointerMouse"
									>
										mouse
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="allowPointer"
										id="allowPointerPen"
										value="pen"
										checked={
											canvasProps.allowOnlyPointerType === "pen"
										}
										onChange={() => {
											setCanvasProps((prevCanvasProps) => ({
												...prevCanvasProps,
												allowOnlyPointerType: "pen",
											}));
										}}
									/>
									<label
										className="form-check-label"
										htmlFor="allowPointerPen"
									>
										pen
									</label>
								</div>
							</div>
							<div className="p-2 col-10">
								<label htmlFor="style" className="form-label">
									style
								</label>
								<textarea
									id="style"
									className="dataURICode col-12"
									onChange={(event) => {
										try {
											const style = JSON.parse(event.target.value);
											setCanvasProps((prevCanvasProps) => ({
												...prevCanvasProps,
												style: style,
											}));
										} catch {
											return;
										}
									}}
									rows={5}
									defaultValue={JSON.stringify(
										canvasProps.style,
										null,
										2
									)}
								/>
							</div>
							<div className="p-2 col-10">
								<label htmlFor="svg-style" className="form-label">
									SVG style
								</label>
								<textarea
									id="svg-style"
									className="dataURICode col-12"
									onChange={(event) => {
										try {
											const svgStyle = JSON.parse(
												event.target.value
											);
											setCanvasProps((prevCanvasProps) => ({
												...prevCanvasProps,
												svgStyle: svgStyle,
											}));
										} catch {
											return;
										}
									}}
									rows={5}
									defaultValue={JSON.stringify(
										canvasProps.svgStyle,
										null,
										2
									)}
								/>
							</div>
							<div className="p-2 col-10">
								<label htmlFor="pathsToLoad" className="form-label">
									Paths to load
								</label>
								<textarea
									name="pathsToLoad"
									id="pathsToLoad"
									className="dataURICode col-12"
									rows={5}
									value={pathsToLoad}
									onChange={(e) => {
										setPathsToLoad(e.target.value);
									}}
								/>
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => {
										const pathsToUpdate = JSON.parse(pathsToLoad);

										canvasRef.current?.loadPaths(pathsToUpdate);
									}}
								>
									Load Paths
								</button>
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

					<section className="row image-export mt-5 p-3 justify-content-center align-items-start">
						<div className="col-5 row form-group">
							<div className="p-2">
								<label className="col-12" htmlFor="paths">
									Paths
								</label>
								<textarea
									id="paths"
									className="dataURICode col-12"
									readOnly
									rows={10}
									value={
										paths.length !== 0
											? JSON.stringify(paths, null, 2)
											: "Sketch to get paths"
									}
								/>
							</div>
							<div className="p-2">
								<label className="col-12" htmlFor="last-stroke">
									Last stroke
									{lastStroke.isEraser !== null &&
										":" + (lastStroke.isEraser ? "Eraser" : "Pen")}
								</label>
								<textarea
									id="last-stroke"
									className="dataURICode col-12"
									readOnly
									rows={10}
									value={
										lastStroke.stroke !== null
											? JSON.stringify(lastStroke.stroke, null, 2)
											: "Sketch to get the last stroke"
									}
								/>
							</div>
						</div>
						<div className="col-5 offset-2">
							<label className="col-12" htmlFor="dataURI">
								Sketching time
							</label>
							<div id="sketchingTime" className="sketchingTime">
								{(sketchingTime / 1000).toFixed(3)} sec
							</div>
						</div>
					</section>

					<section className="row image-export p-3 justify-content-center align-items-start">
						<div className="col-5 row form-group">
							<label className="col-12" htmlFor="imageDataURI">
								Exported Data URI for imagetype
							</label>
							<textarea
								id="imageDataURI"
								className="dataURICode col-12"
								readOnly
								rows={10}
								value={dataURI || "Click on export image"}
							/>
						</div>
						<div className="col-5 offset-2">
							<p>Exported image</p>
							<img
								className="exported-image"
								id="exported-image"
								src={
									dataURI ||
									"https://via.placeholder.com/500x250/000000/FFFFFF/?text=Click on export image"
								}
								alt="exported"
							/>
						</div>
					</section>

					<section className="row image-export p-3 justify-content-center align-items-start">
						<div className="col-5 row form-group">
							<label className="col-12" htmlFor="svgCode">
								Exported SVG code
							</label>
							<textarea
								id="svgCode"
								className="dataURICode col-12"
								readOnly
								rows={10}
								value={svg || "Click on export svg"}
							/>
						</div>
						<div className="col-5 offset-2">
							<p>Exported SVG</p>
							{svg ? (
								<span
									id="exported-svg"
									className="exported-image"
									dangerouslySetInnerHTML={{ __html: svg }}
								/>
							) : (
								<img
									src="https://via.placeholder.com/500x250/000000/FFFFFF/?text=Click on export SVG"
									alt="Svg Export"
									id="exported-svg"
									className="exported-image"
								/>
							)}
						</div>
					</section>
				</section>
			</div> */}
		</div>
	);
}

export default Canvas;
