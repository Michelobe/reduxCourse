import React, { Component } from 'react';
import AllBooks from './AllBooks.js';
import MyList from './MyList.js';
import { connect } from 'react-redux';
import { openMyList } from '../actions/allActions.js';

class App extends Component {
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
			<div
				id="appRoot"
				className={this.props.globalState.popupOpen == true ? 'popupOpen' : ''}
			>
				<div className="container">
					{/* =====================MENU============================ */}
					<div className="openList" onClick={this.props.openMyList}>
						<i className="fas fa-bars"></i>
					</div>
					{/* =====================MENU=========================== */}

					<AllBooks />
				</div>

				<MyList />
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return state;
};
export default connect(mapStateToProps, {
	openMyList: openMyList
})(App);
