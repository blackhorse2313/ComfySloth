import './JoinUs.scss';
import { Subscribe } from './Subscribe/Subscribe';

export const JoinUs = () => {
  return (
    <div className="join-us">
      <div className="container">
        <h1>Join our newsletter and get 20% off</h1>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta
            veniam provident adipisci cumque eveniet tempore?
          </p>
          <div className="subscribe">
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
  );
};
