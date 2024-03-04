export interface PageType {
	pageNumber: number;
	link: string;
}

export const HOME: PageType = {
	pageNumber: 0,
	link: '/',
};
export const ABOUT_ME: PageType = {
	pageNumber: 1,
	link: '/about-me',
};
export const FLEXBOX_FUN: PageType = {
	pageNumber: 2,
	link: '/flexbox-fun',
};