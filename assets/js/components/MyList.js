import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MyList extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			// =======================MYLIST============================
			<section id="myList">
				<h3>My List of Books</h3>
				<ul>
					<li>
						Subterranean<span className="deleteBtn">Delete</span>
					</li>
				</ul>
				<div className="closeList">Close List</div>
			</section>
			// =======================MYLIST============================
		);
	}
}
