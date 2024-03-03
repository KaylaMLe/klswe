import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageNumberProvider } from './hooks/PageNumberContext';
import { Home } from './components/Pages/Home';
import { AboutMe } from './components/Pages/AboutMe';
import { ReactFun } from './components/Pages/ReactFun';

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
					<Route path='/react-fun' element={<ReactFun />} />
				</Routes>
			</Router>
		</PageNumberProvider>
	</React.StrictMode>
);
