import { lazy } from 'react';
import {
	HOME,
	LOGIN,
	ABOUT_ME,
	NOT_FOUND_ERROR
} from './hooks/PageNumbers';

const Home = lazy(() => import('./components/Pages/Home'));
const Login = lazy(() => import('./components/Pages/Login'));
const AboutMe = lazy(() => import('./components/Pages/AboutMe'));
const NotFoundError = lazy(() => import('./components/Pages/NotFoundError'));

const routes = [
	{ path: HOME.link, component: Home },
	{ path: LOGIN.link, component: Login },
	{ path: ABOUT_ME.link, component: AboutMe },
	{ path: NOT_FOUND_ERROR.link, component: NotFoundError },
];

export default routes;
