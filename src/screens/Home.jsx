/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
	return (
		<Container className="wrapper center-align">
			<h1>iLM Tutor Stream App</h1>
			<Link to="/live/tutor">Start Live</Link>
		</Container>
	);
};

export default Home;

const Container = styled.section`
	padding: 48px 0;
	flex-direction: column;
`;
