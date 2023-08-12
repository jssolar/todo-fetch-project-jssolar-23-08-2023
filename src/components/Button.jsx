import React from 'react'

const Button = ({ texto, className}) => {
    return (
        <button className='button-add-task' >{texto}</button>
    )
}

export default Button