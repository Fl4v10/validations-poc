import React from "react";
import CustomButtons from "./Button/CustomButtons";
// import logo from "./logo.svg";
// import "./App.css";
// import { runValidations } from "./models/Person";
// import ReactChipInput from "./chips/Chips";


function App() {
	// runValidations();

	// const [chips, steChips] = useState([] as any[]);
	// const addChip = (value: any) => {
	// 	const newChips = chips.slice();
	// 	newChips.push(value);
	// 	steChips(newChips);
	// };
	// const removeChip = (index: any) => {
	// 	const newChips = chips.slice();
	// 	newChips.splice(index, 1);
	// 	steChips(newChips);
	// };

	return (
		<div className="App">
			<header className="App-header">
				<CustomButtons />
			</header>
		</div>
	);
}

export default App;
