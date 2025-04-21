import { getByText, render } from "@testing-library/react";
import Card from "../card/Card";
import '@testing-library/jest-dom';

const mockMovie = {
    id: 1,
    title: "Inception",
    content: 'This is the great movie',
}

test('Movie Card rendering', () => {
    render(<Card title={mockMovie.title} />)
    expect(screen.getByText(mockMovie.title).toBeInTheDocument())
})

