import './Furniture.scss';
import { FurnitureItem } from './FurnitureItem';
import compas from './svgviewer-output.svg';
export const Furniture = () => {
  return (
    <section className="custom-furniture">
      <div className="section-content">
        <div className="header">
          <h3>
            Custom Furniture <br /> Built Only For You
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur
            reprehenderit non aliquam voluptates dolore aut vero consequuntur.
          </p>
        </div>
        <div className="cards">
          <FurnitureItem
            icon={compas}
            title="Mission"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
          />
          <FurnitureItem
            icon={compas}
            title="Vision"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
          />
          <FurnitureItem
            icon={compas}
            title="History"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
          />
        </div>
      </div>
    </section>
  );
};
