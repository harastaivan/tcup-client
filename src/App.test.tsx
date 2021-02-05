import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const elements = screen.getAllByText(/tcup 2021/i);
    for (const element of elements) {
        expect(element).toBeInTheDocument();
    }
});
