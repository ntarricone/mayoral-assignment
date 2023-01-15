import { ReactNode } from 'react';
import s from './styles.module.css';

export default function Grid({ children }: { children: ReactNode }) {
  return <div className={s.grid}>{children}</div>;
}
