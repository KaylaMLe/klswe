import './src/index.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './src/routes';
import { CurrentPageProvider } from './src/hooks/PageNumberContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<CurrentPageProvider>
			<Router>
				<Suspense fallback={<p>Loading...</p>}>
					<Routes>
						{
							routes.map((route, index) =>
								<Route key={index} path={route.path} element={<route.component />} />)
						}
					</Routes>
				</Suspense>
			</Router>
		</CurrentPageProvider>
	</React.StrictMode>
);
