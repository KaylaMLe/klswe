import { lazy } from 'react';
import {
	NOT_FOUND_ERROR,
	HOME,
	POST
} from './hooks/PageNumbers';

const NotFoundError = lazy(() => import('./components/Pages/NotFoundError'));
const Home = lazy(() => import('./components/Pages/Home/Home'));
const Post = lazy(() => import('./components/Pages/Post/Post'));

const routes = [
	{ path: NOT_FOUND_ERROR.link, component: NotFoundError },
	{ path: HOME.link, component: Home },
	{ path: POST.link, component: Post },
];

export default routes;
