import React from 'react'
import links from 'Utils/Press'
import quotes from 'Utils/PressQuotes'
import './InfoPageBottom.css'

const pressLinks = links.map(({ value, text, link }) => (
	<a href={link} key={value}>
		<p className="pressLink">{text}</p>
	</a>
))

const pressQuotes = quotes.map(({ value, quote, outlet }) => (
	<p className="pressQuote" key={value}>
		<em>{`"${quote}"`}</em>
		{` - ${outlet}`}
	</p>
))

const InfoPageBottom = () => (
	<div className="infoBottom">
		<div className="pressContainer bottomRow">
			<div className="pressQuoteContainer">
				<h2 className="pressHeading">Lets hear what folks are saying!</h2>
				<div className="pressQuotes">{pressQuotes}</div>
			</div>

			<div className="pressLinkContainer">
				<h2 className="pressHeading">Straight from the horse's mouth!</h2>
				<div className="pressLinks">{pressLinks}</div>
			</div>
		</div>
		<div className="hotLinks bottomRow">
			<img src="gifs/hotLinks.gif" alt="hot links" width="200" />
			<a href="https://g-a-u-c-h-e.bandcamp.com/releases" className="hotLink">
				<p>Gauche</p>
			</a>
			<a href="https://teenliver.bandcamp.com/" className="hotLink">
				<p>Teen Liver</p>
			</a>
			<a href="https://sisterpolygonrecords.bigcartel.com/" className="hotLink">
				<p>Sister Polygon</p>
			</a>
			<div className="horseVoteBox">
				<h3 className="horseVoteTitle">Dont forget to vote!</h3>
				<div className="horseVote">
					<img
						src="gifs/horsetopsitevote.gif"
						alt="horse gif 7, thats right, 7 horse gifs"
						height="60"
					/>
					<img src="gifs/horse_vote.gif" alt="horse gif 6" height="60" />
				</div>
			</div>
		</div>
	</div>
)

export default InfoPageBottom
