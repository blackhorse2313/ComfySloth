import './HomePage.scss';
import { Furniture } from './components/Furniture/Furniture';
import { JoinUs } from './components/JoinUs/JoinUs';
import { Slider } from './components/Slider/slider';
import {FeatureProduct} from './components/FeatureProduct/FeatureProduct';

export const HomePage = () => {
  return (
    <>
     <Slider />
     <FeatureProduct/>
      <Furniture />
      <JoinUs />
    </>
  );
};
