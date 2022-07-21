import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";

import hogs from "../porkers_data";
import HogTile from "./HogTile";
import Sort from "./Sort";


function App() {

	const [hogData, setHogData] = useState(hogs);

	function hogFilter (e) {
		if (e.target.checked) {
			const hogsFiltered = hogData.filter(hog => {
				return hog.greased
			})
			setHogData(hogsFiltered)
		} else setHogData(hogs)
	}

	const displayHogs = hogData.map((hog) => {
		return (
			<HogTile image={hog.image} name={hog.name} weight={hog.weight} greased={hog.greased} specialty={hog.specialty} highestmedalachieved={hog["highest medal achieved"]} />
		)
	})

	return (
		<div className="App">
			<Nav />
			<Filter handlerChange={hogFilter}/>
			<Sort />
			<div className="ui grid container">
				{displayHogs}
			</div>
		</div>
	);
}

export default App;
