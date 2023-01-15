import s from './styles.module.css';

interface IProps {
  onSearch: (val: string) => void;
}
export default function Filter({ onSearch }: IProps) {
  return (
    <div className={s.inputDiv}>
      <img src="/icons/search.png" alt="" className={s.search} />
      <input
        type="text"
        placeholder="Buscar"
        onChange={({ target }) => onSearch(target.value)}
        className={s.input}
      />
    </div>
  );
}
