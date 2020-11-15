import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import headerStyles from "./css/header.module.css"

import cx from "classnames"

import { Link } from "react-router-dom"

export default function Header(props) {
	return (
		<>
			<header>
				<nav className={cx("navbar", "navbar-expand-lg", "navbar-dark", headerStyles.bgWip)}>
					<Link
						className="navbar-brand"
						to="/loading"
						onClick={event => {
							props.setLoading(true)
							props.setDestinationPage("/")
						}}
					>
						ArtShare
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarsExample05"
						aria-controls="navbarsExample05"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarsExample05">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/loading"
									onClick={event => {
										props.setLoading(true)
										props.setDestinationPage("/")
									}}
								>
									Browse
								</Link>
							</li>
							{props.isLoggedIn && (
								<>
									<li className="nav-item">
										<Link
											className="nav-link"
											to="/loading"
											onClick={event => {
												props.setLoading(true)
												props.setDestinationPage("/new")
											}}
										>
											Create
										</Link>
									</li>
									<li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											href="/#"
											id="dropdown05"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											{props.userAttribs.preferred_username}
										</a>
										<div className="dropdown-menu" aria-labelledby="dropdown05">
											<Link
												className="dropdown-item"
												to="/loading"
												onClick={event => {
													props.setLoading(true)
													props.setDestinationPage(`/user/${props.userDetails.username}`)
												}}
											>
												Your Page
											</Link>

											<Link
												className="dropdown-item"
												to="/loading"
												onClick={event => {
													props.setLoading(true)
													props.setDestinationPage("/profileupdate")
												}}
											>
												Update Profile
											</Link>
										</div>
									</li>
								</>
							)}
							{!props.isLoggedIn && (
								<>
									<li className="nav-item">
										<Link
											className="nav-link"
											to="/loading"
											onClick={event => {
												props.setLoading(true)
												props.setDestinationPage("/login")
											}}
										>
											Login
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link"
											to="/loading"
											onClick={event => {
												props.setLoading(true)
												props.setDestinationPage("/register")
											}}
										>
											Register
										</Link>
									</li>
								</>
							)}

							{props.isLoggedIn && (
								<li className="nav-item">
									<Link
										className="nav-link"
										to="/loading"
										onClick={event => {
											props.setLoading(true)
											props.setDestinationPage("/logout")
										}}
									>
										Logout
									</Link>
								</li>
							)}
						</ul>
						{/* <form className="form-inline my-2 my-md-0">
                        <input className={headerStyles.formControl} type="text" placeholder="Search"/>
                    </form>
                    <button type="button" className={cx('btn', 'btn-outline-info', headerStyles.btnMod, headerStyles.searchBtn)}>Search</button> */}
					</div>
				</nav>
			</header>
		</>
	)
}
