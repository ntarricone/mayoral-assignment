import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Card from 'components/Card';

const product = {
  id: 9,
  img: 'https://www.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo-manga-corta-ecofriends-basico-nino_id_22-00150-070-L-4.JPG?v=20211213085622',
  title: 'Polo manga corta ECOFRIENDS básico niño',
  price: 9.99,
  discountedPrice: 7.99,
  moreColors: ['rojo', 'gris', 'naranja'],
};

describe('Card component', () => {
  it('should render the Card component', () => {
    const component = render(<Card {...product} />);

    expect(component.getByTestId('card')).toBeInTheDocument();
  });

  it('should display the price with a line through when there is a discount', () => {
    const component = render(<Card {...product} />);

    expect(component.getByTestId('price')).toHaveClass('lineThrough');
  });

  it('should not display the price with a line through when there is NOT a discount', () => {
    product.discountedPrice = null;

    const component = render(<Card {...product} />);

    expect(component.getByTestId('price')).not.toHaveClass('lineThrough');
  });

  it('should not display more colors option', () => {
    product.moreColors = [];
    const component = render(<Card {...product} />);

    expect(component.getByTestId('moreColors')).toHaveClass('hidden');
  });

  it('should display more colors option', () => {
    product.moreColors = ['red', 'blue'];

    const component = render(<Card {...product} />);

    expect(component.getByTestId('moreColors')).not.toHaveClass('hidden');
  });

  it('should display actual colors', () => {
    const component = render(<Card {...product} />);

    const button = component.getByTestId('moreColors');

    fireEvent.click(button);

    expect(component.getByTestId('openedColors')).toBeInTheDocument();
  });
});
