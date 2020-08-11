import React from 'react'

export default function Footer() 
{
    const date = new Date()
    return (
        <>
            <footer className="container">
                <p className="float-right"><a href="#">Back to top</a></p>
                <p>&copy; nameisjeff media {date.getFullYear()} &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>
        </ >
    )
}