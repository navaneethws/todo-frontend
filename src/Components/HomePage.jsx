import React, { useState } from 'react'
import InputTask from './InputTask'
import ListItem from './ListItem'

const HomePage = () => {

  // const [editTask, setEditTask] = useState(null);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState('');

  const handleEditTask = (id, details) => {
    setEditTaskId(id);
    setEditTaskValue(details);
    // setEditTask({id, details})
  };

  return (
    <div className='todolist-container h-screen bg-rose-600'>
      <InputTask editTaskId={editTaskId} editTaskValue={editTaskValue} />
      <ListItem onEdit={handleEditTask}/>
    </div>
  )
}

export default HomePage
