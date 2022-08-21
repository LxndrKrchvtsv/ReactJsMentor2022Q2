import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { NotFound } from './components/NotFound/NotFound';
import { MainPage } from './Pages/MainPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route index element={<Navigate to={'/search'} replace={true} />} />
				<Route path={'/search'} element={<MainPage />}>
					<Route path={':searchQuery'} element={<MainPage />} />
				</Route>
				<Route path={'*'} element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
