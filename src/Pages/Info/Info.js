import React from 'react'
import InfoPageBottom from './InfoPageBottom/InfoPageBottom'
import { dumbText } from '../../Utils/Constants'
import './Info.css'

const Info = () => (
	<div className="infoPage">
		<div className="infoPageTop">
			<div className="topRow">
				<img
					src="gifs/horse_head.gif"
					alt="horse head"
					width="60"
					height="60"
				/>
				<div className="contactInfo">
					<a
						className="contactInfoEmail"
						href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
						target="_top"
					>
						<img src="gifs/horse_email_me.gif" alt="horse gif 2" width="120" />
					</a>
					<span className="emailSpan">
						<a
							className="contactInfoEmail"
							href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
							target="_top"
						>
							Email Me!!
						</a>
					</span>
					<a
						className="contactInfoEmail"
						href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
						target="_top"
					>
						<img src="gifs/horse_email.gif" alt="horse gif 3" width="120" />
					</a>
				</div>
				<img
					src="gifs/horse_head.gif"
					alt="horse head"
					width="60"
					height="60"
				/>
			</div>
			<p className="dumbText">{dumbText}</p>
		</div>
		<InfoPageBottom />
	</div>
)

export default Info
