export function getCurrentPage(): string | undefined | null {
	let currentPage = window.location.href.split('klswe.com/')[1];

	if (currentPage !== undefined && currentPage !== null) {
		if (currentPage.length === 0) {
			currentPage = 'home/';
		} else if (document.title.startsWith('Not Found')) {
			currentPage = 'NOT-FOUND_' + currentPage;
		}

		if (!currentPage.endsWith('/')) {
			currentPage += '/';
		}
	} else {
		console.warn('Invalid window.location.href: ' + window.location.href);
	}

	return currentPage;
}
