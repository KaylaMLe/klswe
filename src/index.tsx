import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HOME, ABOUT_ME, FLEXBOX_FUN } from './hooks/PageNumbers';
import { CurrentPageProvider } from './hooks/PageNumberContext';
import { Home } from './components/Pages/Home';
import { AboutMe } from './components/Pages/AboutMe';
import { FlexboxFun } from './components/Pages/FlexboxFun';
import { Page } from './components/Pages/Page';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<CurrentPageProvider>
			<Router>
				<Routes>
					<Route path={HOME.link} element={
						<Page>
							<Home />
						</Page>
					}
					/>
					<Route path={ABOUT_ME.link} element={
						<Page>
							<AboutMe />
						</Page>}
					/>
					<Route path={FLEXBOX_FUN.link} element={
						<Page>
							<FlexboxFun />
						</Page>
					} />
				</Routes>
			</Router>
		</CurrentPageProvider>
	</React.StrictMode>
);
