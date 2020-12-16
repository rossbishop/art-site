/*
	Filename: 		UserBanner.js
	Description: 	A React functional component used to display user profile information on the user page
	Author: 		Ross Bishop
*/

import React, { useEffect } from "react"

import "bootstrap/dist/css/bootstrap.css"
import userBannerStyles from "./css/userbanner.module.css"

import UserSocialIcon from "./UserSocialIcon"

export default function UserBanner(props) {
	// If banner element exists and there is a user image associated with this profile, use the image as the background
	// Otherwise, use placeholder styling
	useEffect(() => {
		if (document.getElementById("banner") != null && props.bannerURL != null) {
			let banner = document.getElementById("banner")
			banner.style =
				"padding: 0; margin-bottom: 3em; background-image: url(" +
				props.bannerURL +
				"); background-repeat: no-repeat; background-size: 100%; color: #fff;"
		} else if (document.getElementById("banner") != null && props.bannerURL == null) {
			let banner = document.getElementById("banner")
			banner.style =
				"padding: 0; margin-bottom: 3em; background-color: #858585; background-repeat: no-repeat; background-size: 100%; color: #fff;"
		}
	}, [props.bannerURL])

	return (
		<section id="banner">
			<div className={userBannerStyles.blurProfileBg}>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<div className="row">
								<div className="col-4 pr-3">
									{/* If user has an avatar, display it */}
									{props.avatarURL && (
										<img className={userBannerStyles.profileImg} src={props.avatarURL} alt="User Avatar" />
									)}
									{/* If user has no avatar, display a placeholder */}
									{props.noAvatar && (
										<div className={userBannerStyles.noProfileImg}>
											<p>{props.profileData.username.substring(0, 1)}</p>
										</div>
									)}
								</div>
								<div className="col-8">
									<h1>{props.profileData.username}</h1>
									<h6 data-cy="positionDetail">{props.profileData.position}</h6>
									<h6 data-cy="locationDetail">{props.profileData.location}</h6>
									<p data-cy="bioDetail">{props.profileData.bio}</p>
								</div>
							</div>
						</div>
						<div className="col-6 d-flex align-items-end flex-column" data-cy="socialDetails">
							{/* If the user profile contains an Instagram, Facebook or Twitter, display the handle and a corresponding icon */}
							{props.profileData.instagram && (
								<UserSocialIcon socialtype="instagram" username={props.profileData.instagram} />
							)}
							{props.profileData.facebook && (
								<UserSocialIcon socialtype="facebook" username={props.profileData.facebook} />
							)}
							{props.profileData.twitter && (
								<UserSocialIcon socialtype="twitter" username={props.profileData.twitter} />
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
