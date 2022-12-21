/* eslint-disable jsx-a11y/label-has-associated-control */
import './ProductsPage.scss';
import { BreadCrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { FilterPanel } from './components/FilterPanel/FilterPanel';
import { ListView } from './components/Products/ListView/ListView';
import { RootState } from '../../store/store';
import { sortProducts } from './ProductPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const ProductsPage = () => {
  const dispatch = useDispatch();

  const productPageState = useSelector((state: RootState) => state.productPage);

  const breadUrls = [
    {
      href: '/',
      name: 'Home /',
    },
    {
      href: '',
      name: 'Products',
    },
  ];
  const items = [
    {
      value: 'price-lowest',
      label: 'Price (Lowest)',
    },
    {
      value: 'price-highest',
      label: 'Price (Highest)',
    },
    {
      value: 'name-a',
      label: 'Name (A - Z)',
    },
    {
      value: 'name-z',
      label: 'Name (Z - A)',
    },
  ];

  const [gridState, setGridState] = useState(true);

  const onChangeDrop = (value: string) => {
    dispatch(sortProducts({ sortby: value }));
  };

  return (
    <>
      <BreadCrumbs urls={breadUrls} />
      <div className="products-page">
        <div className="container">
          <div className="content">
            <section className="filter-panel">
              <FilterPanel />
            </section>
            <section className="list">
              <div className="topbar">
                <div className="btn-container">
                  <button onClick={() => setGridState(true)} className={gridState ? `active` : ''}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                    </svg>
                  </button>
                  <button onClick={() => setGridState(false)} className={gridState ? '' : 'active'}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <p>{productPageState.products.length} Products Found</p>
                <hr />
                <form>
                  <Dropdown options={items} label={'Sort By'} onChange={onChangeDrop} />
                </form>
              </div>
              <div className="list-view">{gridState ? <></> : <ListView />}</div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
