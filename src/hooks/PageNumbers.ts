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
export const REACT_FUN: PageType = {
	pageNumber: 2,
	link: '/react-fun',
};