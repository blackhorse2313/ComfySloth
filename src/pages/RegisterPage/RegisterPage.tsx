import './RegisterPage.scss';
import picture from '../../assets/images/hero-bcg.a876f19f6786a3aca992.jpeg';
import { Link } from 'react-router-dom';
import { FC, SetStateAction, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { baseUrl } from '../../constant';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const schema = yup
  .object({
    firstName: yup.string().required().min(2),
    lastName: yup.string().required().min(2),
    email: yup.string().required().min(5),
    password: yup.string().required().min(8, 'your password must contain at least 8 characters'),
    repeatPassword: yup
      .string()
      .required()
      .min(8, 'your password must contain at least 8 characters')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

export const RegisterPage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log('aaa');
    fetch(`${baseUrl}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((userId) => alert(userId));
  };

  return (
    <section id="register">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-12 left">
            <h1>Register</h1>
            <h3>If yo haven't account , creat account</h3>
            <button>Sign in with your Google account</button>
            <p className="or">OR</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                <input type="text" placeholder="User name" {...register('name')} />
              </label>
              <p className="validation-error">{errors.name?.message}</p>
              <label>
                <input type="email" placeholder="Email" {...register('email')} />
              </label>

              <label className="forPassword">
                <input
                  type={visible ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('password')}
                />
                <span className='icon'>
                  <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} onClick={() => setVisible(!visible)} />
                </span >
              </label>
              <label className="forPassword">
                <input
                  type={visible ? 'text' : 'password'}
                  placeholder="Repeat Password"
                  {...register('repeatPassword')}
                />
                <span className='icon'>
                  <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} onClick={() => setVisible(!visible)} />
                </span>
              </label>
              <p className="validation-error">{errors.repeatPassword?.message}</p>
              <button>Creat</button>
            </form>
            <div className="account">
              If you have accout already :<Link to="/login">Click here </Link>
            </div>
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
