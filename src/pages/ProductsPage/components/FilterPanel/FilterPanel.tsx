import './FilterPanel.scss';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';

export const FilterPanel = () => {
  // const items = [
  //   {
  //     id: '1',
  //     name: 'all',
  //   },
  //   {
  //     id: '2',
  //     name: 'marcos',
  //   },
  //   {
  //     id: '3',
  //     name: 'liddy',
  //   },
  //   {
  //     id: '4',
  //     name: 'ikea',
  //   },
  //   {
  //     id: '5',
  //     name: 'caressa',
  //   },
  // ];
  return (
    <>
      <form action="">
        <div className="form-control">
          <input type="search" id="form1" className="search-input" placeholder="Search" />
        </div>
        <div className="category">
          <h5>Category</h5>
          <ul>
            <li>All</li>
            <li>Office</li>
            <li>Living Room</li>
            <li>Kitchen</li>
            <li>Bedroom</li>
            <li>Dining</li>
            <li>Kids</li>
          </ul>
        </div>
        {/* <Dropdown title="Company" items={items} /> */}
      </form>
    </>
  );
};
