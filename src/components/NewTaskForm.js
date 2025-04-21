import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]); // Default to first category after "All"

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (text.trim()) {
      onTaskFormSubmit({ text, category });
      setText(""); // Reset the form
      setCategory(categories[1]); // Reset to default category
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="details">Details</label>
      <input
        type="text"
        id="details"
        name="details"
        placeholder="Enter task details"
        value={text}
        onChange={handleTextChange}
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={handleCategoryChange}
      >
        {categories
          .filter((cat) => cat !== "All") // Exclude "All" from dropdown
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;