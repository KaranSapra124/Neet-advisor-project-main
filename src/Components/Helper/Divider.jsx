import React from 'react'

const Divider = ({className}) => {
    return (
        <div className={`${className ? className : 'h-1 w-64 mx-auto my-1 rounded-lg bg-yellow-500 '}`}></div>
    )
}

export default Divider