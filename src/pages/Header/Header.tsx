import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <section id="header">
      <nav>
        <div className="nav-bar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
            </ul>
          </div>
          <div className="cart-login">
            <ul>
              <li>
                Cart
                <FontAwesomeIcon icon={faCartShopping} />{' '}
              </li>
              <li>
                <Link to="/login">
                Login
                <FontAwesomeIcon icon={faUserPlus} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
