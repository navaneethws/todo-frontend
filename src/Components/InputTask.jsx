import React from 'react'

import '../Styles/InputTask.css'
import { BiPlus } from "react-icons/bi";

const InputTask = () => {
    return (
        <div class='main-wrapper flex justify-center pt-10 sm:pt-20'>
            <div class="main-container w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/5 flex flex-col sm:flex-row justify-center bg-yellow-400 rounded pt-10 sm:pt-20 pb-10 sm:pb-20">
                <div class="input-wrapper w-full sm:w-3/5 px-4 sm:px-0 mb-4 sm:mb-0">
                    <input type="text" placeholder='Enter Your Task' class='w-full h-12 pl-4 sm:pl-8 pr-5 focus:outline-none' />
                </div>
                <div class="task-add-btn w-full sm:w-1/4 flex justify-center items-center">
                    <button class='w-10/12 sm:w-9/12 flex flex-row justify-center items-center py-2 sm:pt-3 sm:pb-3 rounded text-white bg-green-600'>
                        Add &nbsp;&nbsp;
                        <span class='font-bold text-lg'><BiPlus /></span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default InputTask
