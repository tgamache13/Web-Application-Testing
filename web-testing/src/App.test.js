import React from 'react';
import * as rtl from '@testing-library/react';
import { Render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';


test("renders without crashing", () => {
    const wrapper = rtl.render(
        <App />
    );
});
test("tests if strikes and balls are updating correctly", () => {
    const display = rtl.render(<Display ball={2} strike={2}/>);
    display.getByText(/Balls: 2/);
    display.getByText(/Strikes: 2/);
});

