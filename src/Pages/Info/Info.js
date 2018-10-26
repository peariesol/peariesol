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
				<h2>contact info</h2>

				<a
					style={{ color: 'red' }}
					href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
					target="_top"
				>
					Email Me
				</a>
			</div>
			<div className="pressContainer">
				<div className="linksContainer">
					<h2 className="linksHeading">Press</h2>
					<div className="pressLinks">{pressLinks}</div>
				</div>
				<div className="quotesContainer">
					<h2 className="quotesHeading">Quotes</h2>
					<div className="pressQuotes">{pressQuotes}</div>
				</div>
			</div>
		</div>
	)
}

export default Info
