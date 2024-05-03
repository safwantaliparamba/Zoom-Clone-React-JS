/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import TutorStream from "./screens/TutorStream";

const App = () => {
	return (
		<Routes>
			<Route path="/" Component={Home} />
			<Route path="/live/tutor" Component={TutorStream} />
		</Routes>
	);
};

export default App;
