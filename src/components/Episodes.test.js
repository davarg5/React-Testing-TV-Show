import React from 'react';
import { screen, render } from '@testing-library/react';
import Episodes from './Episodes';

test('renders without error', () => {
    render(<Episodes episodes={[]}/>);
})

const episodes = [
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
]

test('rerenders correctly when passing in new mission data', () => {
    const { rerender } = render(<Episodes episodes={[]}/>);

    let episodesObjects = screen.queryAllByTestId('episode');
    expect(episodesObjects).toStrictEqual([]);

    rerender(<Episodes episodes={episodes} />)

    episodesObjects = screen.queryAllByTestId('episode');
    expect(episodesObjects).toHaveLength(2);
})