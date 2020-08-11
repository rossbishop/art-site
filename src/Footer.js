import React from 'react'

export default function Footer() 
{
    return (
        <>
            <footer className="container">
                <p className="float-right"><a href="#">Back to top</a></p>
                <p>&copy; nameisjeff media 
                <script>
                    document.write(new Date().getFullYear())
                </script> 
                &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>
        </ >
    )
}