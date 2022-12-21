import './HomePage.scss';
import { Furniture } from './components/Furniture/Furniture';
import { JoinUs } from './components/JoinUs/JoinUs';
import { Slider } from './components/Slider/slider';

export const HomePage = () => {
  return (
    <>
     <Slider />
      <Furniture />
      <JoinUs />
    </>
  );
};
