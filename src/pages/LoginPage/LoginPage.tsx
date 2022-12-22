import './LoginPage.scss';
import picture from '../../assets/images/hero-bcg.a876f19f6786a3aca992.jpeg';
import { Link } from 'react-router-dom';
import { FC, SetStateAction, useState } from "react";
import { useDispatch } from 'react-redux';
import { User } from '../../models/user';
import { baseUrl } from '../../constant';
import { logIn } from '../../store/currentUser.slice';
import { setValueInLocalStorage } from '../../services/localStorage.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';


export const LoginPage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const imitateLogin = () => {
    fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        username: 'example2@mail.com',
        password: '1234',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setValueInLocalStorage('authToken', data.access_token);
        const user: User = {
          id: data.id,
          name: data.name,
        };
        dispatch(logIn({ user: user }));
      });
  };
  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-12 left">
            <h1>Login</h1>
            <h3>If yo have account , let's login</h3>
            <button>Sign in with your Google account</button>
            <p>OR</p>
            <form >
              <label>
                <input type="text" placeholder="User name" />
              </label>
              <label className="forPassword">
                <input type={visible ? "text" : "password"} placeholder="Password" />
                <span className='icon'>
                <FontAwesomeIcon icon={visible ? faEyeSlash:  faEye}
                  onClick={() => setVisible(!visible)}/>
                </span>
               
              </label>
              <button onClick={imitateLogin}>Login</button>
            </form>
            <div className="account">If you have not account :<Link to="/register">Click here </Link></div>
          </div>
          <div className="col-6">
            <div className="right">
              <img src={picture} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};