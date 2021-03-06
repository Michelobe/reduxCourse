const initialState = {
	myList: [],
	openBookInfo: {},
	popupOpen: false,
	listOpen: false
};

let newState;

export const appStateReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'addBook':
			var myList = [...state.myList, action.payload];
			newState = Object.assign({}, state, {
				myList: myList
			});
			return newState;
			break;

		case 'removeBook':
			var myList = state.myList.filter(book => book !== action.payload);
			newState = Object.assign({}, state, {
				myList: myList
			});
			return newState;
			break;

		case 'openBookInfo':
			newState = Object.assign({}, state, {
				openBookInfo: action.payload,
				popupOpen: true
			});
			console.log('============NEW STATE');
			console.log('newState');
			return newState;
			break;

		case 'closeBookInfo':
			newState = Object.assign({}, state, {
				popupOpen: false
			});
			return newState;
			break;

		case 'openMyList':
			newState = Object.assign({}, state, {
				listOpen: true
			});
			console.log('============OPEN LIST');
			console.log('openList');
			return newState;
			break;

		case 'closeMyList':
			newState = Object.assign({}, state, {
				listOpen: false
			});
			return newState;
			break;

		default:
			return state;
			break;
	}
};
