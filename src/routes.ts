import { lazy } from 'react';
import {
	HOME,
	NOT_FOUND_ERROR
} from './hooks/PageNumbers';

const Home = lazy(() => import('./components/Pages/Home/Home'));
const NotFoundError = lazy(() => import('./components/Pages/NotFoundError'));

const routes = [
	{ path: HOME.link, component: Home },
	{ path: NOT_FOUND_ERROR.link, component: NotFoundError },
];

export default routes;
