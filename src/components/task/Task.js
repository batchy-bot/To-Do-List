import { useEffect, useRef, useState } from 'react';
import './Task.css';
export default function Task({ task, setRBoxState, animDelay }) {

    const [areBtnsVisible, setAreBtnsVisible] = useState(false);

    const taskRef = useRef(null);
    const taskBtnsContainer = useRef(null);

    const name = task.name;

    return (
        <div
            ref={taskRef}
            className="Task"
            style={{ animationDelay: animDelay + 's' }}
            onMouseOver={e => setAreBtnsVisible(true)}
            onMouseLeave={e => setAreBtnsVisible(false)}
            onClick={e => setRBoxState('task-select-mode:' + task.id)}
        >
            <div className='task-title-container'><h2>{name}</h2></div>
            {
                areBtnsVisible && <div ref={taskBtnsContainer} className='task-buttons-container'>
                    <button>Save</button>
                    <button>Edit</button>
                    <button>Cancel</button>
                </div>
            }
        </div>
    )
}