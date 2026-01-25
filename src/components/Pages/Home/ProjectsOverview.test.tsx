// Mock the constants module before imports
const MOCK_API_URL = 'http://localhost:8000/api';
jest.mock('../../../constants', () => ({
	API_URL: 'http://localhost:8000/api',
}));

import { render, waitFor } from '@testing-library/react';
import { ProjectsOverview } from './ProjectsOverview';

// Mock the fetch API
global.fetch = jest.fn();

describe('ProjectsOverview', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('hides the projects overview element when there are no slides fetched', async () => {
		// Mock fetch to return an empty array
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => [],
		});

		const { container } = render(<ProjectsOverview />);

		// Wait for the fetch to complete and component to update
		await waitFor(() => {
			const overviewElement = container.querySelector('#projects-overview');
			expect(overviewElement).toBeInTheDocument();
			expect(overviewElement).toHaveClass('hidden');
		});

		// Verify fetch was called with the correct URL
		// mostly for verifying the fetch mock
		expect(global.fetch).toHaveBeenCalledWith(`${MOCK_API_URL}/entries/cards`);
	});

	it('shows the projects overview element when there are slides fetched', async () => {
		// Mock fetch to return an array of slides
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => [
				{
					slug: 'test-project',
					type: 'post',
					title: 'Test Post',
					hero_image_url: 'https://via.placeholder.com/150',
					body: 'This is a test post',
					status: 'published',
					published_at: new Date(),
					updated_at: new Date(),
				},
			],
		});

		const { container } = render(<ProjectsOverview />);

		// Wait for the fetch to complete and component to update
		await waitFor(() => {
			const overviewElement = container.querySelector('#projects-overview');
			expect(overviewElement).toBeInTheDocument();
			expect(overviewElement).not.toHaveClass('hidden');
		});

		// Verify fetch was called with the correct URL
		expect(global.fetch).toHaveBeenCalledWith(`${MOCK_API_URL}/entries/cards`);
	});
});
