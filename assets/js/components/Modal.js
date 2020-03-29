import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeBookInfo, addBook } from '../actions/allActions.js';

class Modal extends Component {
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
			// =======================MODAL============================
			<section
				id="modal"
				className={this.props.globalState.popupOpen == true ? 'active' : ''}
			>
				<div className="modalContainer">
					<div className="closeModal" onClick={this.props.closeBookInfo}>
						<i className="far fa-times-circle"></i>
					</div>
					<div className="modalGrid">
						<div className="images">
							{/* EMPTY/BOOK IMAGE BACKGROUND */}
							<div
								className="cover"
								style={{
									background: `url('${
										this.props.globalState.openBookInfo.coverURL == undefined
											? ''
											: this.props.globalState.openBookInfo.coverURL
									}') center center no-repeat`,
									backgroundSize: `contain`
								}}
							></div>
							{/* EMPTY/BOOK IMAGE BACKGROUND */}
						</div>
						<div className="info">
							<h2>{this.props.globalState.openBookInfo.title}</h2>
							<div className="infoLine">
								<span className="bold">Author: </span>
								{this.props.globalState.openBookInfo.author}
							</div>
							<div className="infoLine">
								<span className="bold">Category: </span>
								{this.props.globalState.openBookInfo.category}
							</div>
							<div className="infoLine">
								<span className="bold">Published: </span>
								{this.props.globalState.openBookInfo.published}
							</div>
							<p className="review">
								{this.props.globalState.openBookInfo.review}
							</p>

							{/* ADD BUTTON */}
							<div
								className="addBtn"
								onClick={this.props.addBook.bind(
									null,
									this.props.globalState.openBookInfo.title
								)}
							>
								Add to My List
							</div>
							{/* ADD BUTTON */}
						</div>
					</div>
				</div>
			</section>
			//=======================MODAL============================
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return state;
};

export default connect(mapStateToProps, {
	closeBookInfo: closeBookInfo,
	addBook: addBook
})(Modal);
