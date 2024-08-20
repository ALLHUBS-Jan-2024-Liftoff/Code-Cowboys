import Input from "../components/input";
import "./price.css";

const priceRanges = [
  { value: 100, title: "$0 - $100" },
  { value: 500, title: "$100 - $500" },
  { value: 1000, title: "$500 - $1,000" },
  { value: 10000, title: "$1,000 - $10,000" }
];

function Price({ handleChange }) {
  return (
    <div className="price-container">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value=""
          name="price"
        />
        <span className="checkmark"></span>
        All
      </label>

      {priceRanges.map(range => (
        <Input
          key={range.value}
          handleChange={handleChange}
          value={range.value}
          title={range.title}
          name="price"
        />
      ))}
    </div>
  );
}

export default Price;