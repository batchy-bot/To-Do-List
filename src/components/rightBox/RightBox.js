import { useEffect, useRef } from 'react';
import './RightBox.css';

export default function RightBox({ mode, tasks, handleAddTask }) {

    const isCommand = String(mode).includes(':');

    const command = mode.split(':')[0];
    const commandValue = mode.split(':')[1];

    const addTaskFormRef = useRef(null);

    function handleSaveTask() {
        const name = addTaskFormRef.current.querySelector('#new-task-name-input').value;


        handleAddTask({ name: name, description: 'testdesc' });
    }

    return (
        <div id='right-box' ref={addTaskFormRef}>
            <div id='right-box-head'>
                {
                    isCommand ? <h1>{tasks[commandValue - 1].name}</h1> :
                        mode == 'add-task-mode' ? (<div className='new-task-inp-container'>
                            <h4>New Task:</h4>
                            <input type='date' />
                            <input id='new-task-name-input' placeholder='New Task Name'></input>
                        </div>) : 'None'
                }
            </div>
            <div id='right-box-body'>

                {
                    mode === 'add-task-mode' ? (<textarea placeholder='New Task Details'></textarea>) :
                        command === 'task-select-mode' ? <textarea disabled>{tasks[commandValue - 1].description}</textarea> : <button onClick={e => mode = 'add-task-mode'}>New Task</button>
                }
            </div>
            <div id='right-box-foot'>
                {
                    (mode === 'add-task-mode') ? <button onClick={handleSaveTask}>Save</button> : ''
                }
            </div>
        </div>
    )
}