import React, { Component, PropTypes } from 'react';

class Header extends Component {

	render() {
		let nav = this.props.children;

		return (
			<header>
				<div>
					<img src="" alt="our image"/>
				</div>
				<div>
					{ nav }
				</div>
			</header>
		);
	}

}

export default Header;
