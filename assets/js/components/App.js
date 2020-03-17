import React, { Component } from 'react';
import AllBooks from './AllBooks.js';
import MyList from './MyList.js';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Michael'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div id="appRoot">
				<div className="container">
					{/* =====================MENU============================ */}
					<div className="openList">
						<i className="fas fa-bars"></i>
					</div>
					{/* =====================MENU============================ */}

					<AllBooks />
				</div>

				<MyList />
			</div>
		);
	}
}
