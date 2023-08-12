import React from 'react'

const Tasks = ({ text, icon, icon2, className }) => {
    return (

        <>
            <li className='list-group-item d-flex justify-content-between'>{text}{icon2}  {icon}</li>



        </>
    )
}

export default Tasks