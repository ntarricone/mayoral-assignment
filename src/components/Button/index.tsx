import { ReactNode } from 'react';
import s from './styles.module.css';

interface IProps {
  type?: 'primary' | 'secondary';
  children: ReactNode;
}

export default function Button({
  type = 'primary',
  children,
  ...buttonProps
}: IProps & React.HTMLProps<HTMLButtonElement>) {
  return (
    <button className={s[type]} {...buttonProps}>
      {children}
    </button>
  );
}
