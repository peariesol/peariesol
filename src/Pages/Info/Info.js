import React from 'react'
import links from '../../Utils/Press'
import quotes from '../../Utils/PressQuotes'
import './Info.css'

const Info = () => {
	const pressLinks = links.map(({ value, text, link }) => (
		<div key={value} className="pressLinkBox">
			<a href={link}>
				<p className="pressLink">{text}</p>
			</a>
		</div>
	))
	const pressQuotes = quotes.map(({ value, quote, outlet }) => (
		<div key={value} className="pressQuoteBox">
			<p className="pressQuote">
				<em>{`"${quote}"`}</em>
				{` - ${outlet}`}
			</p>
		</div>
	))
	return (
		<div>
			<h2>Info</h2>
			<div className="PressQuoteContainer">{pressLinks}</div>
			<div className="PressLinkContainer">{pressQuotes}</div>
		</div>
	)
}

export default Info
