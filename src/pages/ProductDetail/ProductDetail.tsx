import './ProductDetail.scss';
import { BreadCrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { RatingStars } from '../../components/RatingStars/RatingStars';
import { baseUrl } from '../../constant';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import image from '../../assets/images/j4ZpvP4wbSwE9my6w0I_dxqXCvAkG_J5vn80R-Q34wo (2).jpeg';
import { ProductResponse } from '../../models/ProductResponse';


export const ProductDetail = () => {
  const [count, setCount] = useState(0);

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  const breadUrls = [
    {
      href: '/',
      name: 'Home /',
    },
    {
      href: '/products',
      name: 'Products /',
    },
    {
      href: '',
      name: ``,
    },
  ];

  const urlParams = useParams<{ productId: string }>();
  const productId = urlParams.productId;
  const [product, setProduct] = useState<ProductResponse | null>(null);

  console.log(product);

  useEffect(() => {
    fetch(`${baseUrl}/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <>
      <BreadCrumbs urls={breadUrls} />
      <section className="product-detail container">
        <a href="/products" className="btn">
          {' '}
          BACK TO PRODUCTS
        </a>

        <div className="product">
          <section className="image">
            <img src={product?.imageUrl ?? ''} alt="" className="main-img" />

            <div className="gallery">
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
            </div>
          </section>
          <section className="content">
            <h2>{product?.name ?? ''}</h2>
            <div className="rate">
              <div className="stars">
                <span>
                  <div>
                    <RatingStars rating={2.5} />
                  </div>
                </span>
              </div>
              <p className="review">(100 customer reviews)</p>
            </div>

            <h5>{product?.price ?? 0}</h5>
            <p className="desc">{product?.description ?? ''}</p>

            <p className="info">
              <span>Available :</span>
              {product?.price ? 'In Stock' : 'not available'}
            </p>

            <p className="info">
              <span>SKU :</span>
              RecQ0fMd8T0Vk211E
            </p>

            <p className="info">
              <span>Brand :</span>
              Liddy
            </p>

            <hr />

            <section className="AddToCart">
              

              <div className="btn-container">
                <div className="amount-btns">
                  <button type="button" className="amount-btn" onClick={decrement}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                  </button>

                  <h2 className="amount">{count}</h2>

                  <button type="button" className="amount-btn" onClick={increment}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                  </button>
                </div>

                <a href="/cart" className="btn">
                  ADD TO CART
                </a>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};
