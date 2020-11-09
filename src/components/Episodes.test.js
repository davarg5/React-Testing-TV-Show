import React from 'react';
import { screen, render } from '@testing-library/react';
import Episodes from './Episodes';

test('renders without error', () => {
    render(<Episodes />)
})