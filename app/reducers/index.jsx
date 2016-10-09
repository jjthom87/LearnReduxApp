export var nameReducer = (state = 'Jared', action) => {
	switch(action.type){
		case 'CHANGE_NAME':
			return action.name
			default:
				return state;
	}
}

var nextHobbyId = 1;
export var hobbiesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_HOBBIES':
			return [
				...state,
				{
					id: nextHobbyId++,
					hobby: action.hobby
				}
			]
		case 'REMOVE_HOBBIES':
			return state.filter((hobby) => hobby.id !== action.id)
		default:
			return state;
	}
}

var nextMovieId = 1;
export var movieReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id: nextMovieId++,
					name: action.name,
					genre: action.genre
				}
			]
		case 'REMOVE_MOVIE':
			return state.filter((movie) => movie.id !== action.id)
		default:
			return state;
	}
}

export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
	switch(action.type){
		case 'START_LOCATION_FETCH':
			return {
				isFetching: true,
				url: undefined
			}
		case 'COMPLETE_LOCATION_FETCH':
			return {
				isFetching: false,
				url: action.url
			};
		default:
			return state;	
	}
}