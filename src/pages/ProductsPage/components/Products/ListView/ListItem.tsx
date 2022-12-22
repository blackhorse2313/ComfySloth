import { useContext } from 'react';
import { MainContext } from '../../../../../store/contex';
import './ListItem.scss';

interface IListItemProps {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  desc: string;
}

export const ListItem = (props: IListItemProps) => {
  const { id, imgUrl, name, price, desc } = props;
  const {basket , setBasket}=  useContext(MainContext);
  return (
    <div className="list-view" onClick={()=>{setBasket([...basket,{ id, imgUrl, name, price, desc}]);}}>
      <article>
        <img src={imgUrl} alt={name} />
        <div>
          <h4>{name}</h4>
          <h5 className="price">${price}</h5>
          <p>{desc}</p>
          <button>
            <a className="btn" href={`/products/${id}`}>
              DETAILS
            </a>
          </button>
        </div>
      </article>
    </div>
  );
};
