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
	async test() {}
	render() {
		console.log(this.props);
		return (
			// =====================ALLBOOKS============================
			<section className="allBooks">
				<div className="bookContainer">
					<div
						onClick={this.props.openBookInfo}
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

const mapStateToProps = state => {
	console.log(state);
	return state;
};

export default connect(mapStateToProps, { openBookInfo: openBookInfo })(
	AllBooks
);
