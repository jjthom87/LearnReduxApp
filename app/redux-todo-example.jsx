var redux = require('redux');

console.log('Starting redux example');

//has default state for when app gets started
//reducer function returns state if no action or action it doesnt recognize

var stateDefault = {
	searchText: 'dildo jockey mcgigglesticks',
	showCompleted: false,
	todos: []
}

var reducer = (state = stateDefault, action) => {
		switch (action.type){
			case 'CHANGE_SEARCHTEXT':
				return {
					...state,
					searchText: action.searchText
				};
			default:
				return state;
		}
};

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
store.subscribe(() =>{
	var state = store.getState();

	console.log('Search Text is', state.searchText);
	document.getElementById('app').innerHTML = state.searchText;

	console.log('New State', store.getState());
})

//get state returns object..Anonymous
var currentState = store.getState();
console.log('Current State', currentState);

store.dispatch({
	type: "CHANGE_SEARCHTEXT",
	searchText: 'Jared'
});

store.dispatch({
	type: "CHANGE_SEARCHTEXT",
	searchText: 'Bob'
});