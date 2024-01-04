import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	const [showingButton, setShowingButton] = useState(true);

	const handleButton = () => {
		setShowingButton(!showingButton);
	};
	return (
		<div className='App'>
			<button onClick={handleButton}>BUTTON</button>
			{showingButton && <h1>TEXT TO DISAPPEAR</h1>}
		</div>
	);
}

export default App;
