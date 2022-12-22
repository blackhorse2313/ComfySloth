import './FurnitureItem.scss';

interface IFurnitureItemProps {
  icon: string;
  title: string;
  text: string;
}

export const FurnitureItem = (props: IFurnitureItemProps) => {
  const { icon, title, text } = props;
  return (
    <div className="card">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
