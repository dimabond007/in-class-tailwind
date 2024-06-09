import { useState } from 'react'
import './App.css'

const INITIAL_TASKS = [
  {
    id: "63FJm93",
    title: "Task 1",
    description: "Description of Task 1",
    status: "Pending"
  },
  {
    id: "UGqrCmz",
    title: "Task 2",
    description: "Description of Task 2",
    status: "In Progress"
  },
  {
    id: "UGqrC1z",
    title: "Task 3",
    description: "Description of Task 3",
    status: "Completed"
  },
  {
    id: "UGqrC12",
    title: "Task 4",
    description: "Description of Task 4",
    status: "Pending"
  },
  {
    id: "UGqrC15",
    title: "Task 5",
    description: "Description of Task 5",
    status: "In Progress"
  },
  {
    id: "UGqrC13",
    title: "Task 6",
    description: "Description of Task 6",
    status: "Pending"
  },
  {
    id: "UGqrC14",
    title: "Task 7",
    description: "Description of Task 7",
    status: "Completed"
  },
  {
    id: "UGqrC16",
    title: "Task 8",
    description: "Description of Task 8",
    status: "In Progress"
  },
  {
    id: "UGqrC17",
    title: "Task 9",
    description: "Description of Task 9",
    status: "Pending"
  },
  {
    id: "UGqrC18",
    title: "Task 10",
    description: "Description of Task 10",
    status: "Completed"
  }
];


function App() {

  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [newTask, setNewTask] = useState(tasks[0]);

  const addTask = (task) => {

    setTasks([...tasks, task])
  }


  const completeTask = (id) => setTasks(tasks.map((t) => (t.id === id? {...t, status: "Completed" } : t)))
  const inProgressTask = (id) => setTasks(tasks.map((t) => (t.id === id? {...t, status: "In Progress" } : t)))
  const pendingTask = (id) => setTasks(tasks.map((t) => (t.id === id? {...t, status: "Pending" } : t)))
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id!== id))

  function makeId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  

  return (
    <>
      <div className="">
        <h1>Create New Task</h1>
        <div className='create_block'>
          <label>Title</label>
          <input type="text" value={newTask.title} onChange={(e) => setNewTask({...newTask, title: e.target.value })} />
          <label>Description</label>
          <input type="text" value={newTask.description} onChange={(e) => setNewTask({...newTask, description: e.target.value })} />
          <button onClick={() => addTask({ ...newTask,id: makeId(10), status: "Pending" })}>Add Task</button>
          <button onClick={() => setNewTask(tasks[0])}>Reset</button>
        </div>
        <h1>Tasks</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>


              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <p>{task.status}</p>

              <button onClick={()=>deleteTask(task.id)}>Delete</button>
              <button onClick={()=>completeTask(task.id)}>Complete</button>
              <button onClick={()=>inProgressTask(task.id)}>In Progress</button>
              <button onClick={()=>pendingTask(task.id)}>Pending</button>
            </li>
          ))}
        </ul>
        <button onClick={() => addTask({ id: makeId(10), title: "New Task", description: "Description of New Task", status: "Pending" })}>Add Task</button>
      </div>
    </>
  )
}

export default App
