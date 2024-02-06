import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { PageNumberProvider } from './pages/PageNumberContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<PageNumberProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about-me' element={<AboutMe />} />
				</Routes>
			</Router>
		</PageNumberProvider>
	</React.StrictMode>
);
