import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTile from "./HogTile";

const displayHogs = hogs.map((hog) => {
	return (
		<HogTile image={hog.image} name={hog.name} weight={hog.weight} greased={hog.greased} specialty={hog.specialty} />
	)
})

function App() {
	return (
		<div className="App">
			<Nav />
			{displayHogs}
		</div>
	);
}

export default App;
