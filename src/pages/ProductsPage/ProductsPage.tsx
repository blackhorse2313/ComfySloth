import './ProductsPage.scss';
import { FilterPanel } from './components/FilterPanel/FilterPanel';
import { BreadCrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const ProductsPage = () => {
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
  return (
    <>
      <BreadCrumbs urls={breadUrls} />
      <div className="products-page">
        <div className="container">
          <div className="content">
          <section className="filter-panel">
            <FilterPanel />
          </section>
          </div>
        </div>
      </div>
    </>
  );
};
