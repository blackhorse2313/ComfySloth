import './GridView.scss';
import { GridItem } from './GridItem';
import { RootState } from '../../../../../store/store';
import { baseUrl } from '../../../../../constant';
import { loadProducts } from '../../../ProductPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const GridView = () => {
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
          <div className="products-container">
            <GridItem
              key={index}
              id={product.id}
              imgUrl={product.imageUrl}
              name={product.name}
              price={'$' + product.price}
            />
          </div>
        );
      })}
    </>
  );
};
