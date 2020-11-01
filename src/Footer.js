import React from 'react'

export default function Footer() 
{
    const date = new Date()
    return (
        <>
            <footer className="container">
                <p className="float-right"><a href="#">Back to top</a></p>
                <p>&copy; Ross Bishop {date.getFullYear()}</p>
            </footer>
        </ >
    )
}