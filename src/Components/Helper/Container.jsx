import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={`${className} p-20 mx-auto`}>
            {
                children
            }
        </div>
    )
}

export default Container