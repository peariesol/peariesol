import React from 'react'
import InfoPageBottom from './Components/InfoPageBottom/InfoPageBottom'
import { dumbText } from 'Utils/Constants'
import './Info.css'

const Info = () => (
	<div className="infoPage">
		<div className="infoPageTop">
			<div className="topRow">
				<img src="gifs/horse_head.gif" alt="horse head" className="horseHead" />
				<div className="contactInfo">
					<a
						className="contactInfoEmail"
						href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
						target="_top"
					>
						<img
							src="gifs/horse_email_me.gif"
							alt="horse gif 2"
							className="emailImage"
						/>
					</a>

					<a
						className="contactInfoEmail"
						href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
						target="_top"
					>
						Email Me!!
					</a>

					<a
						className="contactInfoEmail"
						href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
						target="_top"
					>
						<img
							src="gifs/horse_email.gif"
							alt="horse gif 3"
							className="emailImage"
						/>
					</a>
				</div>
				<img src="gifs/horse_head.gif" alt="horse head" className="horseHead" />
			</div>
			<p className="dumbText">{dumbText}</p>
		</div>
		<InfoPageBottom />
	</div>
)

export default Info
