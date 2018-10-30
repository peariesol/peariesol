import React from 'react'
import links from '../../Utils/Press'
import quotes from '../../Utils/PressQuotes'
import './Info.css'

const pressLinks = links.map(({ value, text, link }) => (
	<span key={value} className="pressLinkBox">
		<a href={link}>
			<p className="pressLink">{text}</p>
		</a>
	</span>
))

const pressQuotes = quotes.map(({ value, quote, outlet }) => (
	<span key={value} className="pressQuoteBox">
		<p className="pressQuote">
			<em>{`"${quote}"`}</em>
			{` - ${outlet}`}
		</p>
	</span>
))

const Info = () => {
	return (
		<div className="infoPage">
			<div className="contactInfo">
				<span>
					For booking, shows and general info,
					<a
						className="contactInfoEmail"
						href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
						target="_top"
					>
						Email Me
					</a>
					!
				</span>
				<div className="horseGifs">
					<img src="gifs/computers_email.gif" alt="computers email" />
					<img src="gifs/email_butterfly.gif" alt="computers email" />
					<img src="gifs/email.gif" alt="computers email" />
					<img src="gifs/horse_email_2.gif" alt="horse gif 1" />
					<img src="gifs/horse_email_me.gif" alt="horse gif 2" />
					<img src="gifs/horse_email.gif" alt="horse gif 3" />
					<img src="gifs/horse_email3.gif" alt="horse gif 4" />
					<img src="gifs/horse_head.gif" alt="horse gif 5" />
					<img src="gifs/horse_vote.gif" alt="horse gif 6" />
					<img src="gifs/horsetopsitevote.gif" alt="horse gif 7" />
					<img src="gifs/horse_head.gif" alt="horse gif 8" />
					<img
						src="gifs/horse_run.gif"
						alt="horse gif 9, yep, 9 horse gifs on this page"
					/>
				</div>
			</div>
			<div className="pressContainer">
				<div className="linksContainer">
					<h2 className="linksHeading">Press</h2>
					<div className="pressLinks">{pressLinks}</div>
				</div>
				<div className="quotesContainer">
					<h2 className="quotesHeading">Lets see what folks are saying!</h2>
					<div className="pressQuotes">{pressQuotes}</div>
				</div>
			</div>
			<div className="hotLinks">
				<img src="gifs/hotLinks.gif" alt="hot links" />
			</div>
		</div>
	)
}

export default Info
