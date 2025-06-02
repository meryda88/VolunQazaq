import React, { useState } from "react";
import './To_do_list.css';

function To_do_list() {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([{ task: "", completed: false }]);
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState("")

  const addTask = () => {
    if (value.trim() === "") return; 
    setTasks([...tasks, { task: value.trim(), completed: false, deadline}]);
    setValue("");
    setDeadline("");
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter((_, index) => index !== id));
  };

  const handleChange = (id) => {
    setTasks(
      tasks.map((task, index) =>
        index === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "complete") return task.completed === true;
    if (filter === "incomplete") return task.completed === false;
    return true;
  });

  return (
    <div className="to-do-list">
        <h1>To do list</h1>
      <input
        type="text"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        placeholder="Жаңа тапсырма"
      />

      <button className="btn-add" onClick={addTask}>Add</button>

      <input type="date" 
      value={deadline}
      onChange={(e)=> setDeadline(e.target.value)}/>

      <ul>
        {tasks.map((n, index) => (
          <li key={index}>
            {n.task}{" "}
            <button className="btn-status" onClick={() => handleChange(index)}>
              {n.completed ? "🔙" : "✔️"}
            </button>
            <button className="btn-delete" onClick={() => handleRemove(index)}>🗑️</button>
          </li>
        ))}
      </ul>

      <div className="filter-box">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("complete")}>Complete</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
            task.task.trim() !== '' && (
            <li key={index}>
            <div>{task.task}{""}
            {task.deadline && (
                <span style={{marginLeft:"10px", color:"gray"}}>(deadline: {task.deadline})</span>
            )}
            </div>
            <div className="btn-box">
              <button className="btn-status" onClick={() => handleChange(index)}>
                {task.completed ? "🔙" : "✔️"}
              </button>
              <button className="btn-delete" onClick={() => handleRemove(index)}>🗑️</button>
            </div>
            </li>
        )
    ))}
      </ul>
    </div>
  );
}

export default To_do_list;
