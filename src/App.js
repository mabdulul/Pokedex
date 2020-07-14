import React from "react";

import HomePage from "./components/HomePage";
import Nav from "./components/Nav";

import "./App.css";
function App() {
	return (
		<div
			className="App"
			style={{
				backgroundSize: "cover",
			}}
		>
			<Nav />

			<HomePage />
		</div>
	);
}

export default App;
