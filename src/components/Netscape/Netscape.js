import React from 'react'
import PropTypes from 'prop-types'

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

Netscape.propTypes = {
	netscapeFollow: PropTypes.bool.isRequired,
	setNetscapeFollow: PropTypes.func.isRequired,
	mouseX: PropTypes.oneOfType([PropTypes.null, PropTypes.number]),
	mouseY: PropTypes.oneOfType([PropTypes.null, PropTypes.number])
}

export default Netscape
