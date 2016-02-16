import React from 'react'

import MenuBar from './MenuBar'

const Main = (props) => {
	return (
		<div className="main-container">
			<MenuBar />
			<div className="container">
				{props.children}
			</div>
		</div>
	);
};

export default Main;