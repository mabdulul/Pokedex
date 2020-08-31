import history from "./history";

export const getPokemon = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	const thedata = history.push("/list", { data });
	return thedata;
};
