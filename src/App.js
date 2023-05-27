import { useEffect, useState, useRef } from 'react';
import './App.css';
import TodoCard from './components/TodoCard';
import addIcon from './res/add-icon.svg';
import taskOption from './res/task-option.svg';
import taskCheckBtn from './res/task-check.svg';
import Task from './components/task/Task';
import RightBox from './components/rightBox/RightBox';
import NewTaskModal from './components/newTaskModal/NewTaskModal';


function App() {

  const ctasks = [{
    id: 1,
    name: 'Assignment 1',
    status: 'pending',
    description: 'Lorem ipsum dolor ti amet'
  }, {
    id: 2,
    name: 'Assignment 2',
    status: 'pending',
    description: 'Lorem ipsum dolor ti amet'
  }, {
    id: 3,
    name: 'Assignment 3',
    status: 'pending',
    description: 'Lorem ipsum dolor ti amet'
  }, {
    id: 4,
    name: 'Assignment 3',
    status: 'pending',
    description: 'Lorem ipsum dolor ti amet'
  }]

  const [tasks, setTasks] = useState(ctasks);
  const [rBoxState, setRBoxState] = useState('none');
  const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);

  const categRef = useRef(null);

  function handleAddTask(newTask) {
    setTasks([...tasks, { id: tasks.length + 1, name: newTask.name, status: 'pending', description: newTask.description }])
  }
  function toggleTaskModal() {
    if (isTaskModalVisible) {
      setIsTaskModalVisible(false);
    } else {
      setIsTaskModalVisible(true);
    }
  }

  return (
    <div id="App">
      <TodoCard>

        <div className='todo-part'>
      
        </div>
        <div className='todo-part'>
          <div id='task-left-circle'>
            <h5 >{tasks.length}</h5>
          </div>
          <span id='task-left-text'>Tasks Left</span>
        </div>
        <div className='todo-part'>
          <div className='add-task-content' >
            <h3>Add a New Task</h3>
            <img src={addIcon} onClick={e => {
              setRBoxState('add-task-mode');
              toggleTaskModal()
            }} />
          </div>
        </div>
        <div className='todo-part'>
          <div id='tasks-container'>
            {
              tasks.length > 0 ? tasks.sort((a, b) => b.id - a.id)
                .map((task, index) => <Task animDelay={index * .2} task={task} setRBoxState={setRBoxState} />)
                : 'No Tasks Left'
            }
          </div>
        </div>

      </TodoCard>
      <TodoCard>
        <RightBox mode={rBoxState} tasks={tasks} handleAddTask={handleAddTask} />
      </TodoCard>


      {
        isTaskModalVisible && <NewTaskModal toggleTaskModal={toggleTaskModal}/>
      }
    </div>
  );
}

export default App;
