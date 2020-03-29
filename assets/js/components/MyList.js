import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeMyList, removeBook } from '../actions/allActions.js';

class MyList extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	showListOfBooks() {
		return this.props.globalState.myList.map(book => {
			return (
				<li key={book}>
					{book}
					<span
						className="deleteBtn"
						onClick={this.props.removeBook.bind(null, book)}
					>
						Delete
					</span>
				</li>
			);
		});
	}

	render() {
		return (
			// =======================MYLIST============================
			<section
				id="myList"
				className={this.props.globalState.listOpen == true ? 'active' : ''}
			>
				<h3>My List of Books</h3>
				<ul>{this.showListOfBooks()}</ul>
				<div className="closeList" onClick={this.props.closeMyList}>
					Close List
				</div>
			</section>
			// =======================MYLIST============================
		);
	}
}

const mapStateToProps = state => {
	return state;
};
export default connect(mapStateToProps, {
	closeMyList: closeMyList,
	removeBook: removeBook
})(MyList);
