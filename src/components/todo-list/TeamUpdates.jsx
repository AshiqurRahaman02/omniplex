import React,{useEffect,useRef} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";

function TeamUpdates({
	updates,
	creatorName,
	createdAt,
	userId,
	text,
	formData,
	handleChange,
	sendMessage,
	timeConverter,
}) {
	const allUpdatesRef = useRef();

	const scrollToBottom = () => {
		allUpdatesRef.current.scrollTop = allUpdatesRef.current.scrollHeight;
	};

	useEffect(() => {
		scrollToBottom();
	}, [updates]);
	return (
		<aside id="updates">
			<div>
				<p>{text?text:"Team updates"}</p>
				<p>
					<FontAwesomeIcon icon={faComments} />
				</p>
			</div>
			<main ref={allUpdatesRef}>
				<p>
					Team created by {creatorName}
					<br />
					{timeConverter(createdAt)}{" "}
				</p>
				{updates.length > 0 &&
					updates.map((update) => {
						return update.updateType === "update" ? (
							update.message === "joined" ? (
								<p>
									{update.userName} {update.message}
								</p>
							) : (
								<p>{update.message}</p>
							)
						) : update.userId === userId ? (
							<div id="own-update">
								<p>{update.message}</p>
								<span>{timeConverter(update.time)}</span>
							</div>
						) : (
							<div>
								<span>{update.userName}</span>
								<p>{update.message}</p>
								<span>{timeConverter(update.time)}</span>
							</div>
						);
					})}
			</main>
			<div>
				<input
					type="text"
					name="message"
					value={formData.message}
					onChange={handleChange}
				/>
				<div id="faIcon" onClick={sendMessage}>
					<FontAwesomeIcon icon={faPaperPlane} size="xl" />
					<span>send</span>
				</div>
			</div>
		</aside>
	);
}

export default TeamUpdates;
