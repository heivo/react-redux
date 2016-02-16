import React, { Component } from 'react'
import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'

class MenuBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav">
						<li><a href="#" onClick={e => { e.preventDefault(); this.props.navigateTo('1');}}>Link 1</a></li>
						<li><a href="#" onClick={e => { e.preventDefault(); this.props.navigateTo('2');}}>Link 2</a></li>
					</ul>
				</div>
			</nav>
		);	
	}	
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	navigateTo: (path) => dispatch(routerActions.push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)

