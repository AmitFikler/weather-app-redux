import { countries } from '../data/country';

const DropDown = () => {
  return (
    <div>
      <input type="text" list="data" />
      <datalist id="data">
        {countries.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </div>
  );
};

export default DropDown;
