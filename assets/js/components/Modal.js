import React, { Component } from 'react';
import { connect } from 'react-redux';

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
					<div className="closeModal">
						<i className="far fa-times-circle"></i>
					</div>
					<div className="modalGrid">
						<div className="images">
							{/* EMPTY/BOOK IMAGE BACKGROUND */}
							<div
								className="cover"
								style={{
									background: `url('img/subterraneanBook.jpg') center center no-repeat`,
									backgroundSize: `contain`
								}}
							></div>
							{/* EMPTY/BOOK IMAGE BACKGROUND */}
						</div>
						<div className="info">
							<h2>Subterranean</h2>
							<div className="infoLine">
								<span className="bold">Author: </span>
								James Rollins
							</div>
							<div className="infoLine">
								<span className="bold">Category: </span>
								Novel, Thriller, Suspense, Adventure Fiction
							</div>
							<div className="infoLine">
								<span className="bold">Published: </span>
								1999
							</div>
							<p className="review">
								Subterranean is a novel by James Rollins. Beneath the ice at the
								bottom of the Earth is a magnificent subterranean labyrinth, a
								place of breathtaking wonders – and terrors beyond imagining.
							</p>
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

export default connect(mapStateToProps)(Modal);
