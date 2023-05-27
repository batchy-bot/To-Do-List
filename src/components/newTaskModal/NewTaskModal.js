import './NewTaskModal.css';
import { useState } from 'react';

export default function NewTaskModal({ toggleTaskModal }) {

    function handleClickOutside(e) {
        if (e.target.id == 'new-task-modal-container') {
            const ok = e.target.querySelector('#new-task-modal-form-container');
            ok.style.animationName = 'taskModalOut';
            setTimeout(() => {
                toggleTaskModal();
            }, 400);
        }
    }

    return (
        <div id="new-task-modal-container" onClick={e => handleClickOutside(e)}>
            <div id='new-task-modal-form-container'>
                <form>
                    <label htmlFor='new-task-title'>Title</label>
                    <input type='text' />
                    <label htmlFor='new-task-title'>Due Date</label>
                    <input type='date' />
                    <label htmlFor='new-task-title'>Description</label>
                    <textarea type='text' />
                </form>
            </div>
        </div>
    )
}