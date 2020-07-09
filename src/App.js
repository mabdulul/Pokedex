import React from "react";
import SearchForm from "./components/SearchForm";
import HomePage from "./components/HomePage";
import bg from "./bg2.png";
import "./App.css";
function App() {
	return (
		<div
			className="App"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
			}}
		>
			<SearchForm />
			<HomePage />
		</div>
	);
}

export default App;
