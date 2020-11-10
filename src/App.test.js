import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow');

const episodesData = {
	data: {
		name: "Show 1",
		summary: "Summary 1",
		image: { original: "original_image", medium: "medium_image", },
		_embedded: {
			episodes: [
				{
					id: 1,
					url: "url1",
					name: "Episode 1",
					season: 1,
					number: 1,
					summary: "Ep_Summary_1",
					runtime: 1,
					image: { medium: "ep1_med_image", }
				},
				{
					id: 2,
					url: "url2",
					name: "Episode 2",
					season: 1,
					number: 2,
					summary: "Ep_Summary_2",
					runtime: 2,
					image: { medium: "ep2_med_image", }
				}
			],
		}
	},
};

test('render without errors', async () => {
    mockFetchShow.mockResolvedValueOnce(episodesData);
    render(<App />)
})

test('fetches episode data and renders it', async () => {
    mockFetchShow.mockResolvedValueOnce(episodesData);
    render(<App />)

    
    await waitFor(() => {
        const dropdown = screen.getByText(/select a season/i);
        userEvent.click(dropdown);
        const season1 = screen.getByText(/season 1/i);
        userEvent.click(season1);
        const episodes = screen.getAllByText(/season 1/i);
        expect(episodes).not.toBeNull;
        //expect(episodes).toHaveLength(2);
    })


})