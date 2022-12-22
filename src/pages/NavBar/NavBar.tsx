import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <section id="header">
      <nav className="row">
        <div className="col-3">
          <div className="logo ">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="col-5">
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-4">
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
