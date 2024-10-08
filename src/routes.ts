import { lazy } from 'react';
import {
	HOME,
	LOGIN,
	ABOUT_ME,
	FLEXBOX_FUN,
	TRANSLATE,
	PDF_TO_FORM,
	NOT_FOUND_ERROR
} from './hooks/PageNumbers';

const Home = lazy(() => import('./components/Pages/Home'));
const Login = lazy(() => import('./components/Pages/Login'));
const AboutMe = lazy(() => import('./components/Pages/AboutMe'));
const FlexboxFun = lazy(() => import('./components/Pages/FlexboxFun'));
const Translate = lazy(() => import('./components/Pages/Translate'));
const PdfToForm = lazy(() => import('./components/Pages/PdfToForm'));
const NotFoundError = lazy(() => import('./components/Pages/NotFoundError'));

const routes = [
	{ path: HOME.link, component: Home },
	{ path: LOGIN.link, component: Login },
	{ path: ABOUT_ME.link, component: AboutMe },
	{ path: FLEXBOX_FUN.link, component: FlexboxFun },
	{ path: TRANSLATE.link, component: Translate },
	{ path: PDF_TO_FORM.link, component: PdfToForm },
	{ path: NOT_FOUND_ERROR.link, component: NotFoundError },
];

export default routes;
