import React, { useEffect, useState } from 'react'

import '../Styles/InputTask.css'
import { BiPlus } from "react-icons/bi";
import axios from 'axios';
// import uuid from 'react-uuid';
import { nanoid } from 'nanoid';
import { FaRegEdit } from "react-icons/fa";

const InputTask = ({ editTaskId, editTaskValue }) => {

    // const [id,setId] = useState('')
    const [task, setTask] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const [editTask, setEditTask] = useState('')
    const [isEditMode, setIsEditMode] = useState(false);

    // console.log(task);

    console.log(editTaskId);
    console.log(editTaskValue);

    const handleAddTask = async (e) => {
        e.preventDefault()

        if (!task) {
            setErrorMessage('Please enter a task.');
            return;
        }

        // console.log(task);

        // setId(uuid().slice(0,3));

        const id = nanoid(3);

        const body = {
            id,
            task
        }
        console.log(body);

        // api call
        const result = await axios.post('http://localhost:8000/add-list', body)
        console.log(result);

        setTask('')

        setErrorMessage('');

        window.location.reload()
    }

    const handleUpdateTask = async (e) =>{
        e.preventDefault()

        const editBody = {
            editTaskId,
            editTask
        }

        const result = await axios.post('http://localhost:8000/update-list',editBody)
        alert(result.data.message)

        setEditTask('');
        
        window.location.reload()
    }

    useEffect(() => {
        if (editTaskId !== null) {
            // If editTaskId is not null, it means we are in edit mode
            setEditTask(editTaskValue);
            setIsEditMode(true);
        } else {
            setEditTask('');
            setIsEditMode(false);
        }
    }, [editTaskId, editTaskValue]);

    return (
        <div className={'main-wrapper flex justify-center pt-10 sm:pt-20'}>
            {isEditMode ? (
                // Render a different div for edit mode
                <div className="edit-mode-container w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/5 flex flex-col sm:flex-row justify-center bg-violet-900 rounded pt-10 sm:pt-20 pb-10 sm:pb-20">
                    <div className="input-wrapper w-full h-16 sm:w-3/5 px-4 sm:px-0 mb-4 sm:mb-0">
                        <input type="text" value={editTask} placeholder='Enter Your Task' className='w-full h-12 pl-4 sm:pl-8 pr-5 focus:outline-none' onChange={(e) => setEditTask(e.target.value)} />
                    </div>
                    <div className="task-add-btn w-full h-12 sm:w-1/4 flex justify-center items-center">
                        <button onClick={(e) => handleUpdateTask(e)} className='w-10/12 sm:w-9/12 flex flex-row justify-center items-center py-2 sm:pt-3 sm:pb-3 rounded text-black bg-sky-300'>
                            Update &nbsp;&nbsp;
                            <span className='font-bold text-lg'><FaRegEdit /></span>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="main-container w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/5 flex flex-col sm:flex-row justify-center bg-yellow-400 rounded pt-10 sm:pt-20 pb-10 sm:pb-20">
                    <div className="input-wrapper w-full h-16 sm:w-3/5 px-4 sm:px-0 mb-4 sm:mb-0">
                        <input type="text" value={task} placeholder='Enter Your Task' className='w-full h-12 pl-4 sm:pl-8 pr-5 focus:outline-none' onChange={(e) => setTask(e.target.value)} />
                        {errorMessage && <p className="text-red-600 text-sm pt-1">{errorMessage}</p>}
                    </div>
                    <div className="task-add-btn w-full h-12 sm:w-1/4 flex justify-center items-center">
                        <button onClick={(e) => handleAddTask(e)} className='w-10/12 sm:w-9/12 flex flex-row justify-center items-center py-2 sm:pt-3 sm:pb-3 rounded text-white bg-green-600'>
                            Add &nbsp;&nbsp;
                            <span className='font-bold text-lg'><BiPlus /></span>
                        </button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default InputTask
