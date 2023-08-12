import React, { useEffect, useState } from 'react'
import './App.css'
import ListTask from './components/ListTask'
import Tasks from './components/Tasks'
import Button from './components/Button'
import { FaEdit, FaTrash } from 'react-icons/fa'


const App = () => {
    const [text, setText] = useState('')
    const [newTask, setNewTask] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim() !== '') {
            setNewTask(newTask.concat(text))
        } setText('')
        console.log(text)

    }

    const handleChange = (e) => {
        setText(e.target.value)
    }


    const handleDelete = () => {
        setNewTask([])
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="coll-md-12">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Task">Task</label>
                        <input type="text" onChange={handleChange} value={text} className='mt-3 input-task' />
                        <Button texto={'Add task'}/>
                        <button onClick={handleDelete} className='button-delete' type='text'>Delete All</button>
                        <ListTask>
                            {
                                // !!newTask.length&&
                                newTask.length ? (
                                    newTask.map((tarea, index) => {
                                        return <Tasks key={index} text={tarea} icon2={<FaEdit className='edit'/>} icon={<FaTrash className='delete' />} />
                                    })
                                ) : (<h4>Emty List</h4>)
                            }
                        </ListTask>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App