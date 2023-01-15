import { NextPage } from 'next';
import { useState } from 'react';
import s from '../styles/index.module.css';
import { IProduct } from '../interfaces/IProduct';
import Card from 'components/Card';
import Grid from 'components/Grid';
import Filter from 'components/Filter';
import Sort from 'components/Sort';
import { API } from '../../constants';
import { normalizeString } from '../../utils';

interface IProps {
  initialProducts: IProduct[];
}

const HomePage = ({ initialProducts }: IProps) => {
  const [filters, setFilters] = useState<{ search: string; order: 'asc' | 'desc' }>({
    search: '',
    order: 'asc',
  });

  const filteredProducts = initialProducts
    .filter((product) => {
      if (!filters.search) return initialProducts;
      const normalizeTitle = normalizeString(product.title);
      return normalizeTitle.includes(normalizeString(filters.search));
    })
    .sort((a, b) => {
      if (filters.order === 'asc')
        return (a.discountedPrice || a.price) - (b.discountedPrice || b.price);
      if (filters.order === 'desc')
        return (b.discountedPrice || b.price) - (a.discountedPrice || a.price);
    });

  function onSearch(value: string) {
    setFilters((prev) => ({ ...prev, search: value }));
  }
  function onSort(value: 'desc' | 'asc') {
    setFilters((prev) => ({ ...prev, order: value }));
  }
  return (
    <>
      <div className={`flex between py-1 ${s.responsive}`}>
        <Filter onSearch={onSearch} data-testid="filter" />
        <Sort onSort={onSort} />
      </div>
      {!filteredProducts.length && <div>No se han encontrado productos</div>}
      <Grid>
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </Grid>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  try {
    const res = await fetch(`${API}/api/products`);
    const initialProducts = await res.json();

    return {
      props: {
        initialProducts,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
      },
    };
  }
}
