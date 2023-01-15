import Button from 'components/Button';
import { useState } from 'react';
import { calculatePercentageDiff, determineOperator } from '../../../utils';
import { IProduct } from '../../interfaces/IProduct';
import s from './styles.module.css';

export default function Card(product: IProduct) {
  const { img, title, price, discountedPrice, moreColors } = product;

  const [areColorsOpened, setAreColorsOpened] = useState(false);

  return (
    <div className={`${s.card} relative`} data-testid="card">
      <img src={img} alt={String(img)} width="100%" />
      {areColorsOpened && (
        <div className={`absolute ${s.colorsDiv}`} data-testid="openedColors">
          {moreColors?.map((color, index) => (
            <p key={index}>{color.toUpperCase()}</p>
          ))}
        </div>
      )}

      <h5 className={s.title}>{title}</h5>

      <p className={discountedPrice ? s.lineThrough : ''} data-testid="price">
        {price} €
      </p>

      <p
        className={`${s.discountedPrice} ${!discountedPrice ? s.hidden : ''}`}
        data-testid="discountedPrice"
      >
        {discountedPrice}€({determineOperator({ arg1: price, arg2: discountedPrice })}
        {calculatePercentageDiff({ arg1: price, arg2: discountedPrice })}%)
      </p>

      <p
        className={`pointer ${s.moreColors} ${!moreColors.length ? s.hidden : ''}`}
        onClick={() => setAreColorsOpened((prev) => !prev)}
        data-testid="moreColors"
      >
        más colores
      </p>

      <Button onClick={() => console.log('button clicked')}>AÑADIR</Button>
    </div>
  );
}
