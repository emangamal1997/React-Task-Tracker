import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const[tasks,setTasks]=useState([{
    id:3,
    text:"Doctor Appointment",
    day:"today",
    reminder:true
},
{
    id:5,
    text:"Shopping",
    day:"sunday",
    reminder:true
},
{
    id:6,
    text:"studying React ",
    day:"friday",
    reminder:true
},
])
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = { id, ...task };
  setTasks([...tasks, newTask])
}
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id 

  ))
}
const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))

}
  return (
    
    <div    className="container">
     
      <Header  onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask} />
       {showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ?(
<Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />) :('No tasks to show ')
  }  
  
  </div>
      
  );
}

export default App;
