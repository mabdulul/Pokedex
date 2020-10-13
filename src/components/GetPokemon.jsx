import history from "./history";

export const getPokemon = async (url) => {
	const response = await fetch(
		`https://cors-anywhere.herokuapp.com/https://pokeapi.glitch.me/v1/pokemon/${url}`
	);
	const data = await response.json();
	const thedata = history.push("/list", { data });
	return thedata;
};
