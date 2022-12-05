import './Header.scss'
import logo from '../../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus ,faCartShopping } from '@fortawesome/free-solid-svg-icons'



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
            <li>Cart <FontAwesomeIcon icon={faCartShopping} /> </li>
            <li>Login <FontAwesomeIcon icon={faUserPlus} /></li>
          </ul>
        </div>
        </div>
       
      </nav>
      <article>
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
      </article>

    </section>
  )
}


