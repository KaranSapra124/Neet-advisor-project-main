import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={`${className} lg:p-12 mx-auto p-10`}>
            {
                children
            }
        </div>
    )
}

export default Container