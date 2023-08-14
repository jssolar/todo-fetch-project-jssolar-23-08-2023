import React from 'react'

const Tasks = ({ text, icon, icon2 }) => {
    return (

            <li className='list-group-item rounded d-flex justify-content-between lista'>{text}<span>{icon2}  {icon}</span></li>
    )
}

export default Tasks