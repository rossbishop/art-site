import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import headerStyles from './css/header.module.css'
import cx from 'classnames'

export default function Header() 
{
    return (
        <>
        <header>
            <nav className={cx('navbar', 'navbar-expand-lg', 'navbar-dark', headerStyles.bgWip)}>
                <a className="navbar-brand" href="/">WorkInProgress</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample05">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Browse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/newproject">Create</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown05">
                                <a className="dropdown-item" href="/userpage">Your Page</a>
                                <a className="dropdown-item" href="/updateprofile">Update Profile</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-md-0">
                        <input className={headerStyles.formControl} type="text" placeholder="Search"/>
                    </form>
                    <button type="button" className={cx('btn', 'btn-outline-info', headerStyles.btnMod, headerStyles.searchBtn)}>Search</button>
                </div>
            </nav>
        </header>
        </ >
    )
}