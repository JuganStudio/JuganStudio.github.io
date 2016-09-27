import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

let logoText = 'Jugan Studio';
let logoClass = 'active logo';

class Header extends Component {

	render() {
		let nav = this.props.children;

		return (
			<header className='container-fluid navbar navbar-default navbar-fixed-top'>
				<div className='container'>
					<Link to='/' activeClassName={logoClass}>
						{ logoText }
					</Link>
				</div>
				<div className='container'>
					{ nav }
				</div>
			</header>
		);
	}

}

export default Header;
