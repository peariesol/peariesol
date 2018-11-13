import React from 'react'
import PropTypes from 'prop-types'
import './Netscape.css'

const Netscape = ({ setNetscapeFollow, netscapeFollow, mouseX, mouseY }) => (
	<img
		onMouseOver={setNetscapeFollow}
		className="netscape"
		src="images/netscape-compress.jpg"
		alt="netscape logo"
		style={
			netscapeFollow
				? {
						height: 40,
						width: 40,
						position: 'absolute',
						top: mouseY >= 100 ? mouseY - 120 : 100,
						left: mouseX - 20
				  }
				: { position: 'fixed', top: 400, left: 20 }
		}
	/>
)

Netscape.defaultProps = {
	mouseX: null,
	mouseY: null
}

Netscape.propTypes = {
	netscapeFollow: PropTypes.bool.isRequired,
	setNetscapeFollow: PropTypes.func.isRequired,
	mouseX: PropTypes.number,
	mouseY: PropTypes.number
}

export default Netscape
