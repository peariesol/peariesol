import React, { Component } from 'react'
import { times, map } from 'lodash'
import './MoreCat.css'

class MoreCat extends Component {
	constructor(props) {
		super(props)
		this.state = {
			input: '',
			reaction: '',
			cats: []
		}
	}

	componentWillMount() {
		const theCats = []
		times(20, index =>
			theCats.push(
				<div onMouseOver={this.handleCatHover} key={`cat${index}`}>
					<img
						className="invisibleCat"
						src="images/cat-compress.gif"
						height="100"
						alt="secret cat"
					/>
				</div>
			)
		)
		this.setState({ cats: theCats })
	}

	handleCatHover = e => {
		const catImg = e.target.firstChild
		catImg && (catImg.className = 'visibleCat')
	}

	handleInput = v => {
		const value = v.target.value
		value.length >= this.state.input.length
			? this.insert(value)
			: this.delete(value)
		this.setState({ input: value })
	}

	insert = () => {
		this.setState({ reaction: 'Mmmmmm, thats right... More MORE!!' })
	}

	delete = () => {
		this.setState({ reaction: 'Noooooo!!! I could have had it all' })
	}

	handleSubmit = () => {
		this.setState({
			reaction:
				'Yesss!!!! You fool! I cant believe you fell for it! ...Ohh.....wait...Do you mind running your card once more please....?',
			input: ''
		})
	}

	render() {
		const { input, reaction, cats } = this.state
		return (
			<div className="moreCatPage">
				<div className="moreCatTextBox">
					<p className="moreCatText">
						Zowie! you've stumbled onto my super secret page!
					</p>
					<p className="moreCatText">
						Please email me your credit card number to receive your secret
						special secret prize!
					</p>
				</div>
				<div className="catForm">
					<input
						type="text"
						placeholder="those juicy digits"
						value={input}
						onChange={this.handleInput}
						className="catInputText"
					/>
					<button
						type="button"
						onClick={this.handleSubmit}
						className="catSubmitButton"
					>
						YESSSS
					</button>
				</div>
				<p className="reactionText">{reaction}</p>
				<div className="moreCats">{map(cats, cat => cat)}</div>
			</div>
		)
	}
}

export default MoreCat
