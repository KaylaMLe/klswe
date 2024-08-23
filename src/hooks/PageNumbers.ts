export interface PageType {
	pageNumber: number;
	link: string;
}

export const NOT_FOUND_ERROR: PageType = {
	pageNumber: -1,
	link: '*',
};
export const HOME: PageType = {
	pageNumber: 0,
	link: '/',
};
export const LOGIN: PageType = {
	pageNumber: 1,
	link: '/login',
};
export const ABOUT_ME: PageType = {
	pageNumber: 2,
	link: '/about-me',
};
export const FLEXBOX_FUN: PageType = {
	pageNumber: 3,
	link: '/flexbox-fun',
};
export const TRANSLATE: PageType = {
	pageNumber: 4,
	link: '/translate',
};
export const PDF_TO_FORM: PageType = {
	pageNumber: 5,
	link: '/pdf-to-form',
};
