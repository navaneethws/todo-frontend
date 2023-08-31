import React, { useState } from 'react'

import '../Styles/InputTask.css'
import { BiPlus } from "react-icons/bi";
import axios from 'axios';
// import uuid from 'react-uuid';
import { nanoid } from 'nanoid';

const InputTask = () => {

    // const [id,setId] = useState('')
    const [task,setTask] = useState('')

    // console.log(task);

    const handleAddTask = async(e) =>{
        e.preventDefault()

        // console.log(task);

        // setId(uuid().slice(0,3));

        const id = nanoid(3);
        
        const body = {
            id,
            task
        }
        console.log(body);

        // api call
        const result = await axios.post('http://localhost:8000/add-list',body)
        console.log(result);

        setTask('')

        window.location.reload()
    }

    return (
        <div class='main-wrapper flex justify-center pt-10 sm:pt-20'>
            <div class="main-container w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/5 flex flex-col sm:flex-row justify-center bg-yellow-400 rounded pt-10 sm:pt-20 pb-10 sm:pb-20">
                <div class="input-wrapper w-full sm:w-3/5 px-4 sm:px-0 mb-4 sm:mb-0">
                    <input type="text" value={task} placeholder='Enter Your Task' class='w-full h-12 pl-4 sm:pl-8 pr-5 focus:outline-none' onChange={(e)=>setTask(e.target.value)} />
                </div>
                <div class="task-add-btn w-full sm:w-1/4 flex justify-center items-center">
                    <button onClick={(e)=>handleAddTask(e)} class='w-10/12 sm:w-9/12 flex flex-row justify-center items-center py-2 sm:pt-3 sm:pb-3 rounded text-white bg-green-600'>
                        Add &nbsp;&nbsp;
                        <span class='font-bold text-lg'><BiPlus /></span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default InputTask
