import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";

import hogs from "../porkers_data";
import HogTile from "./HogTile";


function handlerChange() {
	 (value) {
		case: All

	 }

}
// const filterByGreased = hogs.filter(hog => hog.greased

const displayHogs = hogs.map((hog) => {
	return (
		<HogTile image={hog.image} name={hog.name} weight={hog.weight} greased={hog.greased} specialty={hog.specialty} highestmedalachieved={hog["highest medal achieved"]} />
	)
})

function App() {
	const [filterValue, setfilterValue] = useState("All")
	return (
		<div className="App">
			<Nav />
			<Filter handlerChange={handlerChange}/>
			{displayHogs}
		</div>
	);
}

export default App;
