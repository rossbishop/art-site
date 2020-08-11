import React from 'react'

export default function Header() 
{
    return (
        <>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-wip">
                <a class="navbar-brand" href="#">WorkInProgress</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample05">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Browse</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</a>
                            <div class="dropdown-menu" aria-labelledby="dropdown05">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-md-0">
                        <input class="form-control" type="text" placeholder="Search">
                    </form>
                    <button type="button" class="btn btn-outline-info search-btn">Search</button>
                </div>
            </nav>
        </header>
        </ >
    )
}