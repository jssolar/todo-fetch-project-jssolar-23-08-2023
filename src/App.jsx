import React, { useEffect, useState } from 'react'
import './App.css'
import ListTask from './components/ListTask'
import Tasks from './components/Tasks'
import Button from './components/Button'
import { FaEdit, FaTrash } from 'react-icons/fa'


const App = () => {

    const url = 'https://playground.4geeks.com/apis/fake/todos/user/camaron'



    const [text, setText] = useState('')
    const [newTask, setNewTask] = useState([])



    useEffect(() => {
        getList()
    }, [])

    const getList =  () => {
        const options = {
            method: "GET",
            // body: []
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(url, options)
            .then(function(response) {
                console.log(response)
                return response.json()
            }).then(function(data){
                // setNewTask(data)
                setNewTask(data)
                console.log(data)
            }).catch((error) =>
                console.log(error))
    }

    const createUser = (url,options) => {
        fetch(url, options)
        .then((response)=>{
            return response.json()
        })
        .then((responseJson)=>{
            console.log(responseJson)
        })
        .catch((error)=>{
            console.log(error)
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // let  tareas = []
        const  options = {
            method: 'POST',
            body: JSON.stringify([]),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        if (text.trim() !== '') {
            setNewTask([...newTask, text])
            console.log(text)
        } setText('')
        console.log(options)
        createUser(url, options)
    }

    const handleClick =()=>{
        const  options = {
            method: 'PUT',
            body: JSON.stringify({label: text, done: false}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (text.trim() !== '') {
            setNewTask([...newTask, text])
            console.log(text)
        } setText('')
        console.log(options)
        addTask(url, options)
    }

    const addTask = (url, options) =>{
        fetch(url, options)
        .then((response)=>{
            return response.json()
        })
        .then((responseJson)=>{
            console.log(responseJson)
        })
        .catch((error)=>{
            console.log(error.msg)
        })   
        
        
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
                        <Button  texto={'Add task'} />
                        <ListTask>
                            {
                                // !!newTask.length&&
                                newTask.length ? (
                                    newTask.map((tarea, index) => {
                                        return <Tasks key={index} text={tarea.label} icon2={<FaEdit className='edit' />} icon={<FaTrash className='delete' />} />
                                    })
                                ) : (<h4>Emty List</h4>)
                            }
                        </ListTask>
                    </form>
                </div>
            </div>
            <button onClick={handleDelete} className='button-delete' type='text'>Delete All</button>
            <button onClick={handleClick} className='button-delete' type='text'>Add Task</button>
        </div>
    )
}

export default App