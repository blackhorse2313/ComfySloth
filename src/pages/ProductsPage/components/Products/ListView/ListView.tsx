import './ListView.scss';
import { ListItem } from './ListItem';
import { RootState } from '../../../../../store/store';
import { baseUrl } from '../../../../../constant';
import { loadProducts } from '../../../ProductPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const ListView = (props: any) => {
  const productPageState = useSelector((state: RootState) => state.productPage);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${baseUrl}/products`)
      .then((response) => response.json())
      .then((data) => dispatch(loadProducts({ products: data })));
  }, []);

  return (
    <>
      {productPageState.products.map((product, index) => {
        return (
          <ListItem
            key={index}
            id={product.id}
            imgUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            desc={product.description.substring(0, 150) + '...'}
          />
        );
      })}
    </>
  );
};
