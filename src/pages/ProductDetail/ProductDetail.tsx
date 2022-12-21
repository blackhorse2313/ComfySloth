import './ProductDetail.scss';
import { RatingStars } from '../../components/RatingStars/RatingStars';
import image from '../../assets/images/j4ZpvP4wbSwE9my6w0I_dxqXCvAkG_J5vn80R-Q34wo (2).jpeg';

export const ProductDetail = () => {
  return (
    <section className="product-detail container">
      <a href="./" className="btn">
        {' '}
        BACK TO PRODUCTS
      </a>

      <div className="product">
        <section className="image">
          <img src={image} alt="" className="main-img" />

          <div className="gallery">
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
          </div>
        </section>

        <section className="content">
          <h2>Modern Poster</h2>
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

          <h5>$30.99.</h5>
          <p className="desc">
            Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf.
            Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave
            iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
          </p>

          <p className="info">
            <span>Available :</span>
            In Stock
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
            <div className="colors">
              <span>colors : </span>

              <div>
                <button>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="btn-container">
              <div className="amount-btns">
                <button type="button" className="amount-btn">
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

                <h2 className="amount">1</h2>

                <button type="button" className="amount-btn">
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

              <a href="./" className="btn">
                ADD TO CART
              </a>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};
