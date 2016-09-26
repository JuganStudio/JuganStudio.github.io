import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

let ulStyle = {

};

let liStyle = {

};

class Nav extends Component {


	render() {
		return (
			<ul>
				<li ><Link to='/' activeClassName='active'>Home</Link></li>
				<li ><Link to='/projects' activeClassName='active'>Projects</Link></li>
				<li ><Link to='/members' activeClassName='active'>Members</Link></li>
				<li ><Link to='/about' activeClassName='active'>About</Link></li>
			</ul>
		)
	}
}

export default Nav;
