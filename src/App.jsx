import { useState } from 'react';
import Button from './components/button/Button';

const App = () => {
	const [number, setNumber] = useState(0);

	return (
		<>
			<h1>{number}</h1>
			<Button text='+1' action={() => increment(number, setNumber)} />
			<Button text='RESET' action={() => reset(number, setNumber)} />
			<Button text='-1' action={() => reduce(number, setNumber)} />

			{/* <h1>{number}</h1>
			<button onClick={() => increment(number, setNumber)}>+1</button> */}
		</>
	);
};

const increment = (number, setNumber) => {
	setNumber(number + 1);
};
const reduce = (number, setNumber) => {
	setNumber(number - 1);
};
const reset = (number, setNumber) => {
	setNumber(0);
};
export default App;
