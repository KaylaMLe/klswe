import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CurrentPageProvider } from './hooks/PageNumberContext';
import { Home } from './components/Pages/Home';
import { AboutMe } from './components/Pages/AboutMe';
import { ReactFun } from './components/Pages/ReactFun';
import { Page } from './components/Pages/Page';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<CurrentPageProvider>
			<Router>
				<Routes>
					<Route path='/' element={
						<Page>
							<Home />
						</Page>
					}
					/>
					<Route path='/about-me' element={
						<Page>
							<AboutMe />
						</Page>}
					/>
					<Route path='/react-fun' element={
						<Page>
							<ReactFun />
						</Page>
					} />
				</Routes>
			</Router>
		</CurrentPageProvider>
	</React.StrictMode>
);
