import './src/index.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './src/routes';
import { CsrfCookieProvider } from './src/hooks/CsrfCookieContext';
import { CurrentPageProvider } from './src/hooks/PageNumberContext';
import { IsMobileProvider } from './src/hooks/ViewPortContext';
import { Fonts } from './fonts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Fonts />
		<CsrfCookieProvider>
			<IsMobileProvider>
				<CurrentPageProvider>
					<Router>
						<Suspense fallback={<p style={{ color: 'white' }}>Loading...</p>}>
							<Routes>
								{routes.map((route, index) => (
									<Route key={index} path={route.path} element={<route.component />} />
								))}
							</Routes>
						</Suspense>
					</Router>
				</CurrentPageProvider>
			</IsMobileProvider>
		</CsrfCookieProvider>
	</React.StrictMode>
);
