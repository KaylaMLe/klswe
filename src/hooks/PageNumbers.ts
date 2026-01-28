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

export const POST: PageType = {
	pageNumber: 1,
	link: '/post/:slug',
};
