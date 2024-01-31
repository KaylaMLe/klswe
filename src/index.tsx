import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavBar } from './NavBar';
import { Home } from './Home';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<NavBar />
		<Home />
	</React.StrictMode>
);
