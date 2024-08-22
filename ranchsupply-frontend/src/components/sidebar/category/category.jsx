import "./category.css";
import Input from "../components/input";

const categories = [
  { category_id: 1, category_name: "Farming Equipment" },
  { category_id: 2, category_name: "Farm Clothing" },
  { category_id: 3, category_name: "Hunting Gear" },
  { category_id: 4, category_name: "Outdoor Recreational" }
];

function Category({ handleChange }) {
  return (
    <div className="category-container">
      <h2 className="sidebar-title">Category</h2>

      <div className="category-options">
        <label className="sidebar-label-container">
          <input
            onChange={() => handleChange('')}
            type="radio"
            value=""
            name="category"
          />
          <span className="checkmark"></span>
          All
        </label>
        {categories.map(category => (
          <label key={category.category_id} className="sidebar-label-container">
            <input
              onChange={() => handleChange(category.category_name)}
              type="radio"
              value={category.category_name}
              name="category"
            />
            <span className="checkmark"></span>
            {category.category_name}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Category;