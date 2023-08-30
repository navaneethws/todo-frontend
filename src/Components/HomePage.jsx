import React from 'react'
import InputTask from './InputTask'
import ListItem from './ListItem'

const HomePage = () => {
  return (
    <div className='todolist-container h-screen bg-rose-600'>
      <InputTask />
      <ListItem />
    </div>
  )
}

export default HomePage
