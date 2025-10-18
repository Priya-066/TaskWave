import Taskform from "./Components/Taskform";
import TaskList from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css"

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask
    setTasks(newtask)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }

  const clearTasks = () => {
    setTasks([])
  }

  return(
    <div className="app-outer">
      <div className="app-container">
        <h1>Task Wave</h1>
        <p>Flow through your day with ease</p>
        <Taskform addTask = {addTask}/>
        <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
        <Progresstracker tasks = {tasks}/>

        {tasks.length > 0 &&
        <button onClick={clearTasks} class="clear">Clear all tasks</button>}
        
      </div>
    </div>
  )
}