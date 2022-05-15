import React from 'react';

const App = () => {
	return (
		<>
			<h1>React TypeScript Webpack starter Template</h1>
			<h2>
				{process.env.NODE_ENV}, {process.env.name}
			</h2>
		</>
	);
};

export default App;
