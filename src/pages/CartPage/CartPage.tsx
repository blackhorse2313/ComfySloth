import './CartPage.scss';


export const CartPage = () => {
  return (
    <section className="container cart">
      <div className="head">
        <div className="content">
          <h5>Item</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Subtotal</h5>
          <span></span>
        </div>
        <hr />
      </div>

      <div className="product">
        <div className="title">
          <img
            src="https://v5.airtableusercontent.com/v1/13/13/1671710400000/cBADR3Ykxoxl0MkXX9kQPQ/bJszrcHzCdSytgEFhJtanrKnPaDEew9L11QHw58ggJfBzzCbeIYljmDX3fYaey80HY80yiZ3DzOyZ12oCgq55mTas8tv_kdRegN9uvyMGVGn90rXjfbfef-2V3uzZ5p8/A8ZFbRYnMhjnWkcww_lRxdja-IXBQFG1S0aU-cEg39M"
            alt="modern poster"
          />

          <div>
            <h5 className="name">Modern Poster</h5>
          </div>
        </div>

        <h5 className="price">$30.99 </h5>

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

        <h5 className="subtotal">$30.99</h5>

        <button className="remove-btn">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
          </svg>
        </button>
      </div>

      <hr />

      <div className="link-container">
        <a className="link-btn" href="/products">
          continue shopping
        </a>
        <button type="button" className="link-btn clear-btn">
          clear shopping cart
        </button>
      </div>

      <section className="ordertotal">
        <div>
          <div className="order-amount">
            <h5>
              Subtotal :<span>$185.94</span>
            </h5>
            <p>
              Shipping fee :<span>$5.34</span>
            </p>
            <hr />
            <h4>
              Order total :<span>$191.28</span>
            </h4>
          </div>
          <button className="btn">login</button>
        </div>
      </section>
    </section>
  );
};

