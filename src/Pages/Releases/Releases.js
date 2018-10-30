import React, { Component } from 'react'
import './Releases.css'

class Releases extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false
		}
	}

	setLoaded = () => this.setState({ loaded: true })

	render() {
		return (
			<div className="releasesPage">
				<div className="releasesPhotoBox">
					<span />
					<div className="iframeBox">
						{!this.state.loaded && <div className="loader">Loading...</div>}
						<iframe
							style={{ display: this.state.loaded ? 'initial' : 'none' }}
							onLoad={this.setLoaded}
							id="bandCampEmbed"
							title="pearie sol s/t tape"
							style={{ border: 0, width: 300, height: 300 }}
							src="https://bandcamp.com/EmbeddedPlayer/album=797557584/size=large/bgcol=333333/linkcol=20B2AA/minimal=true/transparent=true/"
							seamless
						>
							<a href="http://peariesol.bandcamp.com/album/pearie-sol">
								pearie sol by pearie sol
							</a>
						</iframe>
					</div>
					<a
						href="http://sisterpolygonrecords.bigcartel.com/"
						className="coolLink"
					>
						<span>Available on Sister Polygon Records</span>
					</a>
				</div>
			</div>
		)
	}
}

export default Releases
