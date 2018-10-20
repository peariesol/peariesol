import React from 'react'
import './Releases.css'

const Releases = () => {
	const iframe = (
		<iframe
			style={{ border: 0, width: 300, height: 300 }}
			src="https://bandcamp.com/EmbeddedPlayer/album=797557584/size=large/bgcol=333333/linkcol=20B2AA/minimal=true/transparent=true/"
			seamless
		>
			<a href="http://peariesol.bandcamp.com/album/pearie-sol">
				pearie sol by pearie sol
			</a>
		</iframe>
	)
	return (
		<div className="releasesPage">
			<div className="releasesPhotoBox">
				<span />
				{iframe}
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

export default Releases

// <img src="photos/peariesol_cover.jpg" alt="tape 1 cover" />
// <a href="https://peariesol.bandcamp.com/" className="coolLink">
//     <p>Listen Here</p>
// </a>
// <a
//     href="http://sisterpolygonrecords.bigcartel.com/"
//     className="coolLink"
// >
//     <p>Available on Sister Polygon Records</p>
// </a>
