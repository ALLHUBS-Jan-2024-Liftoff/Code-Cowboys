import "./category.css";
import Input from "../components/input";

function Category({ handleChange }) {
  return (
    <div className="category-container">
      <h2 className="sidebar-title">Category</h2>

      <div className="category-options">
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="category"
          />
          <span className="checkmark"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="tractors"
          title="Tractors"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="outdoors"
          title="Outdoors"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="clothing"
          title="Clothing"
          name="category"
        />
      </div>
    </div>
  );
}

export default Category;
