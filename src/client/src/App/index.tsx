import { TextField } from '@src/components/TextField';
import React from 'react';

function App() {
	return (
		<div className="App" style={{ padding: '10rem' }}>
			<TextField
				title="Header"
				type="text"
				require
				errorMessage="fhfjhhjh"
				validate={value => value.length > 2}
			/>
		</div>
	);
}

export default App;
