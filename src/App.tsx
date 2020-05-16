import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { runValidations } from "./models/Person";
// import ReactChipInput from "./chips/Chips";

interface ICustomButton {
	onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
	count: number,
	i: number | string
}

const CountButton = React.memo(function CountButton(props: ICustomButton) {
	console.log('Button:  ', props.i)
	return <button onClick={props.onClick} style={{ width: '90px', height: '40px', background: '#8bc34a', margin: '20px' }}>{props.count}</button>
})

const CountButtonI = (props: ICustomButton) => {
	console.log('Button:  ', props.i)
	return <button onClick={props.onClick} style={{ width: '90px', height: '40px', background: 'orange', margin: '20px' }}>{props.count}</button>
}


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

	const [count1, setCount1] = React.useState(0)
	const increment1 = React.useCallback(() => setCount1(c => c + 1), [])

	const [count2, setCount2] = React.useState(0)
	const increment2 = React.useCallback(() => setCount2(c => c + 1), [])

	const [count3, setCount3] = React.useState(0)
	const increment3 = React.useCallback(() => setCount3(c => c + 1), [])

	const [count4, setCount4] = React.useState(0)
	const increment4 = React.useCallback(() => setCount4(c => c + 1), [])

	const button = <CountButtonI i={'whatever'} count={count3} onClick={increment3} />;
	const buttonI = <CountButtonI i={'whateverI'} count={count3} onClick={increment3} />;
	const buttonII = <CountButtonI i={'whateverII'} count={count4} onClick={increment4} />;

	return (
		<div className="App">
			<header className="App-header">
				<CountButton count={count1} onClick={increment1} i={0} />
				Quando atualiza count1 ele renderiza!
				<br />
				<CountButton i={1} count={count2} onClick={increment2} />
				Quando atualiza count2 ele renderiza!
				<br />
				{button}
				Renderiza TODAS as vezes! (botão atualiza count3)
				<br />
				{buttonI}
				Renderiza TODAS as vezes! (botão atualiza count3)
				<br />
				{buttonII}
				Renderiza TODAS as vezes! (botão atualiza count4)
			</header>
		</div>
	);
}

export default App;
