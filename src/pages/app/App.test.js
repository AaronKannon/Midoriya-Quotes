import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from '@testing-library/jest-dom'
import { App } from "./App";

test('renders the app with a button', () => {
    render( < App /> );

    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');
    const textEl = screen.getByText(/Speaker/);

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
});