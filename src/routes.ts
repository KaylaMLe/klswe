import { lazy } from 'react';
import { HOME, ABOUT_ME, FLEXBOX_FUN } from './hooks/PageNumbers';

const Home = lazy(() => import('./components/Pages/Home'));
const AboutMe = lazy(() => import('./components/Pages/AboutMe'));
const FlexboxFun = lazy(() => import('./components/Pages/FlexboxFun'));

const routes = [
	{ path: HOME.link, component: Home },
	{ path: ABOUT_ME.link, component: AboutMe },
	{ path: FLEXBOX_FUN.link, component: FlexboxFun }
];

export default routes;