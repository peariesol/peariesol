import React, { Component } from 'react'
import './Media.css'

class Media extends Component {
	constructor(props) {
		super(props)
		this.state = {
			alleyLoaded: false,
			loveLoaded: false
		}
	}

	setLoaded = propName => () => this.setState({ [propName]: true })

	render() {
		return (
			<div className="mediaPage">
				<div className="videoContainer">
					<h2 className="mediaHeading videos">Videos</h2>
					<div className="videoBox">
						{!this.state.alleyLoaded && (
							<div className="loader">Patience is a virtue...</div>
						)}
						<iframe
							style={{ display: this.state.alleyLoaded ? 'initial' : 'none' }}
							onLoad={this.setLoaded('alleyLoaded')}
							width="560"
							height="315"
							src="https://www.youtube.com/embed/XO7ZyiLq_dg"
							frameBorder="1"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="alley video"
						/>
						{!this.state.loveLoaded && (
							<div className="loader">Patience is a virtue...</div>
						)}
						<iframe
							style={{ display: this.state.loveLoaded ? 'initial' : 'none' }}
							onLoad={this.setLoaded('loveLoaded')}
							width="560"
							height="315"
							src="https://www.youtube.com/embed/tc2T5ZdKBF4"
							frameBorder="1"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="alley video"
						/>
					</div>
				</div>
				<div className="photoContainer">
					<h2 className="mediaHeading photos">Photos</h2>
					<div className="photos imageGallery">
						<a href="./photos/drew_shot.jpg" target="_blank">
							<img
								className="mediaPhoto"
								src="photos/drew_shot.jpg"
								alt="drew shot"
							/>
						</a>
						<a href="./photos/pearie_sol_jason_pic_low_fi.PNG" target="_blank">
							<img
								className="mediaPhoto"
								src="photos/pearie_sol_jason_pic_low_fi.PNG"
								alt="jason shot"
							/>
						</a>
						<a href="./photos/pearie_sol_performance_1.png" target="_blank">
							<img
								className="mediaPhoto"
								src="photos/pearie_sol_performance_1.png"
								alt="performance 1"
							/>
						</a>
						<a href="./photos/pearie_sol_performance_2.png" target="_blank">
							<img
								className="mediaPhoto"
								src="photos/pearie_sol_performance_2.png"
								alt="performance 2"
							/>
						</a>
					</div>
				</div>
				<div className="flyerContainer">
					<h2 className="mediaHeading photos">Flyers</h2>
					<div className="flyers imageGallery">
						<a href="./photos/flyerFall2018Final.png" target="_blank">
							<img
								className="mediaPhoto"
								src="photos/flyerFall2018Final.png"
								alt="Fall Flyer 2018"
							/>
						</a>
						<a href="./photos/Boogie_Woogie_Tour_Final.png" target="_blank">
							<img
								className="mediaPhoto"
								src="photos/Boogie_Woogie_Tour_Final.png"
								alt="boogie woogie tour flyer"
							/>
						</a>
						<a href="./photos/buster_brown_tour_pic_final.jpg" target="_blank">
							<img
								className="mediaPhoto"
								src="photos/buster_brown_tour_pic_final.jpg"
								alt="buster brown tour flyer"
							/>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Media
