import React, { useEffect, useState } from 'react'
import axios from 'axios';

// import { FiEdit } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ListItem = ({ onEdit }) => {

    const [allLists, setAllLists] = useState([])

    const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/get-all-lists')
        // console.log(result.data.lists);
        setAllLists(result.data.lists)
    }

    // console.log(allLists);

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async(id) =>{
        const result = await axios.delete('http://localhost:8000/delete-employee/'+id)
        alert(result.data.message);
        fetchData()
    }

    return (
        <div className=''>
            <div className='list-wrapper flex justify-center items-center flex-col bg-rose-600'>
                {
                    allLists.map((item) => (
                        <div className="list-container w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/5 flex flex-col sm:flex-row justify-between bg-cyan-800 pt-3 sm:pt-4 pb-3 sm:pb-4 rounded mt-5 mb-5 sm:mt-10">
                            <div className="list-text w-full sm:w-7/12 flex items-center text-white pl-4">
                                <p className="text-sm sm:text-base">{item.list_item}</p>
                            </div>
                            <div className="list-options w-full sm:w-3/12 md:w-3/12 xl:w-1/5 flex justify-between pr-4 mt-2 sm:mt-0">
                                <button onClick={()=>onEdit(item.id, item.list_item)} className='py-2 px-3 sm:py-3 sm:px-4 text-white bg-orange-600 rounded'><FaEdit /></button>
                                <button onClick={(e)=>handleDelete(item.id)} className='py-2 px-3 sm:py-3 sm:px-4 text-white bg-red-700 rounded'><MdDelete /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListItem
