/** @format */

import React, { useCallback, useEffect, useMemo, useState } from "react";
import ZoomVideo from "@zoom/videosdk";
import styled from "styled-components";

import useAppStore from "../store/useAppStore";

const TutorStream = () => {
	const [isInitializing, setInitializing] = useState(true);
	const [localMediaStream, setMediaStream] = useState(null);

	const {
		generateToken,
		token: { token },
	} = useAppStore();

	const liveInfo = useMemo(
		() => ({
			topic: "Cool cars",
			password: "test123",
			userId: 1,
			userName: "Safwan P",
			sessionKey: "session123",
			roleType: 1,
		}),
		[]
	);

	useEffect(() => {
		generateToken(liveInfo);
	}, []);

	const client = useMemo(() => ZoomVideo.createClient(), []);

	const init = async () => {
		try {
			await client.init("US-EN", "CDN", { patchJsMedia: true });

			const room = await client.join(
				liveInfo.topic,
				token,
				liveInfo.userName,
				liveInfo.password
			);
			console.log(room);
			const stream = client.getMediaStream();
			setMediaStream(stream);
			setInitializing(false);
		} catch (error) {
			console.log(error, "Error occured while initing zoom");
			setInitializing(false);
		}
	};

	// const playLocalStream = async (videoEl) => {
	// 	console.log(videoEl);
	// 	const res = await ZoomVideo.createLocalVideoTrack().start(videoEl);
	// 	console.log(res, "---res");
	// };

	useEffect(() => {
		// const videoEl = document.getElementById("local-preview");
		if (token) {
			init();
		}
	}, [token]);

	if (isInitializing) {
		return <p className="center-align">Loading...</p>;
	}

	return (
		<Container className="center-align">
			<h1>Tutor Stream</h1>
			<LocalPreview id="local-preview"></LocalPreview>
		</Container>
	);
};

export default TutorStream;

const Container = styled.section`
	padding: 48px 0;
	flex-direction: column;
`;

const LocalPreview = styled.div`
	width: 300px;
	height: 180px;
	border: 1px solid #808080;
`;
