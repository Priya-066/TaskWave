export default function TaskList({tasks , updateTask, deleteTask}) {
  const toggleComplete = (index) => {
    const updatedTask = {...tasks[index], completed: !tasks[index].completed}
    updateTask(updatedTask, index)
  }

  return (
     <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            <span className={task.completed ? "completed" : ""}>
              {task.text}
              <small> ({task.priority}, {task.category})</small>
            </span>
          </div>

          <div>
            <button
              className="complete"
              onClick={() => toggleComplete(index)}
              title={task.completed ? "Undo" : "Mark Complete"}
            >
              {task.completed ? "↩️" : "✅"}
            </button>

            <button
              className="delete"
              onClick={() => deleteTask(index)}
              title="Delete Task"
            >
              🗑️
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}