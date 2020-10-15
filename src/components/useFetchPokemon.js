import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
	MAKE_REQUEST: "make-request",
	GET_DATA: "get-data",
	ERROR: "error",
};

const BASE_URL =
	"https://cors-anywhere.herokuapp.com/https://pokeapi.glitch.me/v1/pokemon/";

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.MAKE_REQUEST:
			return { loading: true, pokemon: [] };
		case ACTIONS.GET_DATA:
			return { state, loading: false, pokemon: action.payload.pokemon };
		case ACTIONS.ERROR:
			return {
				state,
				loading: false,
				error: action.payload.error,
				pokemon: [],
			};

		default:
			return state;
	}
}

export default function useFetchJobs(url) {
	const [state, dispatch] = useReducer(reducer, { pokemon: [], loading: true });

	useEffect(() => {
		dispatch({ type: ACTIONS.MAKE_REQUEST });
		axios
			.get(BASE_URL, {
				params: { params },
			})
			.then((res) => {
				dispatch({ type: ACTIONS.GET_DATA, payload: { pokemon: res.data } });
			})
			.catch((e) => {
				dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
			});
	}, [url]);

	return state;
}
