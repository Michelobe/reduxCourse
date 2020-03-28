import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openBookInfo } from '../actions/allActions.js';

class AllBooks extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	showAllBooks = () => {
		return this.props.booksData.map(book => {
			return (
				<div key={book.id} className="bookContainer">
					<div
						onClick={this.props.openBookInfo.bind(null, book)}
						className="book"
						style={{
							background: `url('${book.coverURL}') center center no-repeat`,
							backgroundSize: `contain`
						}}
					></div>
				</div>
			);
		});
	};
	async test() {}
	render() {
		console.log(this.props);
		return (
			// =====================ALLBOOKS============================
			<section className="allBooks">{this.showAllBooks()}</section>
			// =====================ALLBOOKS============================
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return state;
};

export default connect(mapStateToProps, { openBookInfo: openBookInfo })(
	AllBooks
);
