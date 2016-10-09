var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();
//has default state for when app gets started
//reducer function returns state if no action or action it doesnt recognize
// var oldReducer = (state = stateDefault, action) => {
	// state = state || {name: 'Anonymous'};

// 	switch (action.type){
// 		case 'CHANGE_NAME':
// 			return {
// 				...state,
// 				name: action.name
// 			};
// 		case 'ADD_DILDO':
// 			return {
// 				...state,
// 				dildos: [
// 					...state.dildos,
// 					{
// 						id: nextDildoId++,
// 						dildo: action.dildo
// 					}
// 				]
// 			}
// 		case 'REMOVE_DILDO':
// 			return {
// 				...state,
// 				dildos: state.dildos.filter((dildo) => dildo.id !== action.id)
// 			}
// 		case 'ADD_MOVIE':
// 			return {
// 				...state,
// 				movies: [
// 					...state.movies,
// 					{
// 						id: nextMovieId++,
// 						name: action.name,
// 						genre: action.genre
// 					}
// 				]
// 			}
// 		case 'REMOVE_MOVIE':
// 			return {
// 				...state,
// 				movies: state.movies.filter((movie) => movie.id !== action.id)
// 			}
// 		default:
// 			return state;
// 	}
// };

// Subscribe to changes
var unsubscribe = store.subscribe(() =>{
	var state = store.getState();

	var stateToHtml = {
		name: state.name,
		hobbies: state.hobbies,
		movies: state.movies
	}

	console.log('New State', store.getState());

	if (state.map.isFetching){
		document.getElementById('app').innerHTML = 'Loading...'
	} else if (state.map.url) {
		document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
	}
})

//get state returns object..Anonymous
var currentState = store.getState();
console.log('Current State', currentState);
// unsubscribe();

store.dispatch(actions.addMovie('Tusk', 'Horror'));
store.dispatch(actions.changeName('Bill'));
store.dispatch(actions.addHobbies('Red One'));
store.dispatch(actions.changeName('Rocky'));
store.dispatch(actions.addMovie('Shutter', 'Horror'));
store.dispatch(actions.removeMovie(2));
store.dispatch(actions.removeHobbies(1));
store.dispatch(actions.fetchLocation());