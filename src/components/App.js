import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

const TASKS = [
  { text: "Build a todo app", category: "Code" },
  { text: "Buy rice", category: "Food" },
];

const CATEGORIES = ["All", "Code", "Food"];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.text !== taskToDelete)
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const visibleTasks = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );

  return (
    <div className="App">
      <h1>Task List</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;