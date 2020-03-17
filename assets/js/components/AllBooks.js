import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AllBooks extends Component {
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
			// =====================ALLBOOKS============================
			<section className="allBooks">
				<div className="bookContainer">
					<div
						className="book"
						style={{
							background: `url('img/subterraneanBook.jpg') center center no-repeat`,
							backgroundSize: `contain`
						}}
					></div>
				</div>
			</section>
			// =====================ALLBOOKS============================
		);
	}
}
