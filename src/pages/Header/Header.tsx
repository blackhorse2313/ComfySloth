import './Header.scss'
import logo from '../../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons'



export const Header = () => {
    return (
        <section id="header">

            <nav>
                <div className="nav-bar">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className="menu"><ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li></ul></div>
                    <div className="cart-login">
                        <ul>
                            <li>Cart<FontAwesomeIcon icon={faCartShopping} /> </li>
                            <li>Login<FontAwesomeIcon icon={faUserPlus} /></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </section>
    )
}