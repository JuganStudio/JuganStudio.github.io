import React, { Component, PropTypes } from 'react';

let title2Style = {
	color: 'rgb(54,193,164)'
}

let descriptionStyle = {
	color: 'rgb(140,140,140)'
}

class HomeDescription extends Component {
	render() {
		return (
			<div className='home-description'>
				<div className='home-description-title'>
					<span dangerouslySetInnerHTML={{__html: this.props.title1}}></span>{' '}
					<span style={title2Style} dangerouslySetInnerHTML={{__html: this.props.title2}}></span>
				</div>
				<div className='home-description-seperator'></div>
				<span  style={descriptionStyle} dangerouslySetInnerHTML={{__html: this.props.description}}></span>
			</div>
		)
	}
}

export default HomeDescription;
