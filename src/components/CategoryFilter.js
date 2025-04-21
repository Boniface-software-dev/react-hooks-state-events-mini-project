import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;