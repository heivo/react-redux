import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory  } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import Main from './components/Main'
import Home from './components/Home'
import Content1 from './components/Content1'
import Content2 from './components/Content2'

const loggingReducer = (state = {}, action) => {
	console.log(action);
	return state;
};

const reducers = combineReducers(Object.assign({}, { loggingReducer }, {
	routing: routerReducer
}));

const store = createStore(reducers, applyMiddleware(routerMiddleware(hashHistory)));
// syncHistoryWithStore(hashHistory, store);

const App = () => (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="1" component={Content1} />
				<Route path="2" component={Content2} />
				<IndexRoute component={Home} />
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));

