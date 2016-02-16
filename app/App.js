import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from './components/Main'
import Home from './components/Home'

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Main}>
					<IndexRoute component={Home} />
				</Route>
			</Router>
		);
	}
};

ReactDOM.render(<App />, document.getElementById('app'));

