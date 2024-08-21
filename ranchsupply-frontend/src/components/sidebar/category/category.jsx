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
            onChange={handleChange}
            type="radio"
            value=""
            name="category"
          />
          <span className="checkmark"></span>
          All
        </label>
        {categories.map(category => (
          <Input
            key={category.category_id}
            handleChange={handleChange}
            value={category.category_name.toLowerCase().replace(/\s+/g, '')}
            title={category.category_name}
            name="category"
          />
        ))}
      </div>
    </div>
  );
}

export default Category;