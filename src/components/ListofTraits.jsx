import React, { useEffect, useState } from "react";
import history from "./history";

const ListOfTraits = (props) => {
	let data = props.location.state;
	const [evoImages, setImages] = useState();
	const [filterdata, setFilterdata] = useState([]);

	useEffect(() => {
		fetchData();
		async function fetchData() {
			setFilterdata(data.data.splice(0, 1));
			const getEvoImages = await data.data.map((ok) =>
				ok.family.evolutionLine.map((evo) => evo)
			);
			console.log(getEvoImages);
			getEvoImages.forEach((evo) =>
				evo.forEach(function (item) {
					fetch(`${item}/`)
						.then((response) => {
							if (response.ok) {
								return response.json();
							}
						})
						.then((data) => console.log(data));
				})
			);
			await setImages(getEvoImages);
		}
	}, [data]);

	if (!data.data) {
		return <h1>The pokemon does not exist </h1>;
	}

	const getLink = async (evo) => {
		await fetch(`${evo}/`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			.then((data) => history.push("/list", { data }));
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					{filterdata.map((poke) => (
						<div key={poke.number}>
							<p>{poke.description}</p>
							<img src={poke.sprite} alt={poke.name} width="500px" />
							<h1>{poke.name}</h1>
							<ul>
								{poke.types.map((type) => (
									<li>{type}</li>
								))}
							</ul>
							<div className="Poke_Looks">
								<p>Weight {poke.weight}</p>
								<p>Height: {poke.height}</p>
								<p>species: {poke.species}</p>
								<p>{poke.abilities.normal}</p>
							</div>
							<div>
								{poke.family.evolutionLine.map((evo) => (
									<button onClick={() => getLink(evo)}>{evo}</button>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ListOfTraits;
