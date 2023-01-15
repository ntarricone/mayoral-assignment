import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import HomePage from 'pages';
import initialProducts from '../api/json/products.json';

describe('Home page integration test', () => {
  it('should render all products passed to component', () => {
    const component = render(<HomePage initialProducts={initialProducts} />);

    const cards = initialProducts.map(({ title }) => component.getByText(title));

    expect(cards.length).toBe(10);
  });

  it('should render card with searched text', () => {
    const component = render(<HomePage initialProducts={initialProducts} />);

    const input = component.getByPlaceholderText('Buscar');

    fireEvent.change(input, { target: { value: 'ojos' } });

    const cardElement = component.getByRole('heading', { name: /ojos/i });

    expect(cardElement).toBeInTheDocument();
  });

  it('should render not found text', () => {
    const component = render(<HomePage initialProducts={initialProducts} />);

    const input = component.getByPlaceholderText('Buscar');

    fireEvent.change(input, { target: { value: 'Not found text' } });

    const notFoundElement = component.getByText(/No se han encontrado productos/i);

    expect(notFoundElement).toBeInTheDocument();
  });

  it('should display array descending when clicking - button', () => {
    const component = render(<HomePage initialProducts={initialProducts} />);

    const button = component.getByTestId('desc');

    fireEvent.click(button);
    const products = component.getAllByTestId('card');

    expect(products[0]).toHaveTextContent('20');
    expect(products[9]).toHaveTextContent('9.99');
  });

  it('should display array ascending when clicking + button', () => {
    const component = render(<HomePage initialProducts={initialProducts} />);

    const button = component.getByTestId('asc');

    fireEvent.click(button);

    const products = component.getAllByTestId('card');

    expect(products[0]).toHaveTextContent('9.99');
    expect(products[9]).toHaveTextContent('20');
  });
});
