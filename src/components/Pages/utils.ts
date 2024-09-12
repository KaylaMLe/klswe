// TODO: deprecate in favor of js-cookie
export function getCookie(name: string): string | null {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
	return null;
}

export function getCurrentPage(): string | undefined | null {
	let currentPage = window.location.href.split('klswe.com/')[1];

	if (currentPage !== undefined && currentPage !== null) {
		if (currentPage.length === 0) {
			currentPage = 'home';
		} else if (document.title.startsWith('Not Found')) {
			currentPage = 'NOT-FOUND_' + currentPage;
		}
	} else {
		console.warn('Invalid window.location.href: ' + window.location.href);
	}

	return currentPage;
}
