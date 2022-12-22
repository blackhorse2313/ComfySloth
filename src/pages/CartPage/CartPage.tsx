import { Link } from 'react-router-dom';
import { MainContext, useContext } from '../../store/contex';
import './CartPage.scss';


export const CartPage = () => {
  const {basket , setBasket}=  useContext(MainContext);
  const sum = basket.reduce((acc, object) => acc + object.price, 0);
  return (
    <section className="container cart">
      <div className="head">
        <div className="content">
          <h5>Item</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <span></span>
        </div>
        <hr />
      </div>
      {basket.map(item=>
        <div key={item.id} className="product">
        <div className="title">
          <img
            src={item.imgUrl}
            alt="modern poster"
          />

          <div>
            <h5 className="name">{item.name}</h5>
          </div>
        </div>

        <h5 className="price">{item.price}</h5>

       
        

        <button className="remove-btn" onClick={()=>setBasket(basket.filter(x=>x.id !== item.id))}>
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

      )}
    
      <hr />

      <div className="link-container">
        
        <Link className="link-btn" to={"/products"}>continue shopping</Link>
        <button type="button" className="link-btn clear-btn" onClick={()=>setBasket([])}>
          clear shopping cart
        </button>
      </div>

      <section className="ordertotal">
        <div>
          <div className="order-amount">
            <h4>
              Order total :<span>${sum.toFixed(2)}</span>
            </h4>
          </div>
          <button className="btn">login</button>
        </div>
      </section>
    </section>
  );
};

