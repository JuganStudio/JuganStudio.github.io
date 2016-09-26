import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

let style = {
	display: 'flex',
	width: '100%',
};

let imgStyle = {
	width: '120px',
	height: 'auto'
}

class Header extends Component {


	render() {
		let nav = this.props.children;

		return (
			<header>
				<div>
					<Link to='/' activeClassName='active'>
						<img src="./images/weekly-studio.png" alt="our image"
							style={imgStyle} />
					</Link>
				</div>
				<div>
					{ nav }
				</div>
			</header>
		);
	}

}

export default Header;
