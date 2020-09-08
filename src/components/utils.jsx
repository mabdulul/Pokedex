export const loadData = async (url) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);

	const data = await response.json();
	return data;
};
