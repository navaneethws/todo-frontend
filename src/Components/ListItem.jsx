import React, { useEffect, useState } from 'react'
import axios from 'axios';

// import { FiEdit } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ListItem = () => {

    const [allLists, setAllLists] = useState([])

    const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/get-all-lists')
        // console.log(result.data.lists);
        setAllLists(result.data.lists)
    }

    console.log(allLists);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className=''>
            <div class='list-wrapper flex justify-center items-center flex-col'>
                {
                    allLists.map((item) => (
                        <div class="list-container w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/5 flex flex-col sm:flex-row justify-between bg-cyan-800 pt-3 sm:pt-4 pb-3 sm:pb-4 rounded mt-5 mb-5 sm:mt-10">
                            <div class="list-text w-full sm:w-7/12 flex items-center text-white pl-4">
                                <p class="text-sm sm:text-base">{item.list_item}</p>
                            </div>
                            <div class="list-options w-full sm:w-3/12 md:w-3/12 xl:w-1/5 flex justify-between pr-4 mt-2 sm:mt-0">
                                <button class='py-2 px-3 sm:py-3 sm:px-4 text-white bg-orange-600 rounded'><FaEdit /></button>
                                <button class='py-2 px-3 sm:py-3 sm:px-4 text-white bg-red-700 rounded'><MdDelete /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListItem
