import React from 'react'
import './Releases.css'

const Releases = () => (
	<div className="releasesPage">
		<div className="releasesPhotoBox">
			<span />
			<div className="iframeBox">
				<iframe
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
			<a href="http://sisterpolygonrecords.bigcartel.com/" className="coolLink">
				<span>Available on Sister Polygon Records</span>
			</a>
		</div>
	</div>
)

export default Releases
