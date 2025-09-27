import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Wake Up",
    "Take a Shower",
    "Study",
    "Eat Lunch",
  ]);
  const [newTask, setNewTask] = useState("");

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input type="text" placeholder="Enter a task..." />
        <button className="add-btn">Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn">Delete</button>
            <button className="move-btn">⬆</button>
            <button className="move-btn">⬇</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
