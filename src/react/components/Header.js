import React, { Component, PropTypes } from 'react';

let style = {
	display: 'flex',
	width: '100%',
};

class Header extends Component {


	render() {
		let nav = this.props.children;

		return (
			<header style={style}>
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
