import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

let ulClass = 'nav nav-bar'
let liClass = 'active';

class Nav extends Component {


	render() {
		return (
			<ul className={ulClass}>
				<li ><Link to='/' activeClassName='active'>Home</Link></li>
				<li ><Link to='/projects' activeClassName='active'>Projects</Link></li>
				<li ><Link to='/members' activeClassName='active'>Members</Link></li>
			</ul>
		)
	}
}

export default Nav;
