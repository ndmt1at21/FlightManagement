import { Button } from '@components/Button';
import React from 'react';

function App() {
	return (
		<div className="App" style={{ padding: '10rem' }}>
			<Button color="primary" type="fill">
				Button
			</Button>
			<Button color="secondary" type="fill" size="lg">
				Button
			</Button>
		</div>
	);
}

export default App;
