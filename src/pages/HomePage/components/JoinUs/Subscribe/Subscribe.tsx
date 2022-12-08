import './Subscribe.scss';
import { SetStateAction, useState } from 'react';

export const Subscribe = () => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const checkEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);

    if (regex.test(email) === false) {
      setError('please enter valid email adress');
    } else {
      setError('');
      return true;
    }
  };
  return (
    <div className="input-add">
      <div className="input-add-on">
        <input type={email} className="input" placeholder="Enter Email" onChange={checkEmail} />

        <button className="button">Subscribe</button>
      </div>
      <span className="text-danger">{error}</span>
    </div>
  );
};
