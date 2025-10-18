import { useState } from "react"

export default function Taskform({addTask}) {

    const[task, setTask] = useState('')
    const[priority, setPriority] = useState('medium')
    const[category, setCategory] = useState('general')

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({text: task, priority, category, completed: false})

        setTask('')
        setPriority('medium')
        setCategory('general')
    }

    return(
        <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter the Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>

      <button type="submit">Add Task</button>
    </form>
    )
}