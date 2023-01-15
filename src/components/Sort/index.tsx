import Button from 'components/Button';

interface IProps {
  onSort: (val: 'asc' | 'desc') => void;
}
export default function Sort({ onSort }: IProps) {
  return (
    <div>
      <Button type="secondary" onClick={() => onSort('desc')} data-testid="desc">
        <img src="/icons/minus.png" alt="" />
      </Button>
      <Button type="secondary" onClick={() => onSort('asc')} data-testid="asc">
        <img src="/icons/plus.png" alt="" />
      </Button>
    </div>
  );
}
