import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './components/Home';
import Projects from './components/Projects';
import Members from './components/Members';
import About from './components/About';

class App extends Component {
	render() {
		return (
			<div>
				<Header>
					<Nav>
					</Nav>
				</Header>

				{this.props.children}

				<Footer>
				</Footer>
			</div>
		);
	}
}

render((
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute components={Home} />
			<Route path='projects' components={Projects} />
			<Route path='members' components={Members} />
			<Route path='about' components={About} />
		</Route>
	</Router>
), document.getElementById('root'));
