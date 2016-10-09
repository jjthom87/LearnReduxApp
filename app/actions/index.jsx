import axios from 'axios';

export var changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name
	}
}
export var addHobbies = (hobby) => {
	return {
		type: 'ADD_HOBBIES',
		hobby
	}
}
export var addMovie = (name, genre) => {
	return {
		type: 'ADD_MOVIE',
		name,
		genre
	}
}
export var removeHobbies = (id) => {
	return {
		type: 'REMOVE_HOBBIES',
		id
	}
}

export var removeMovie = (id) => {
	return {
		type: 'REMOVE_MOVIE',
		id
	}
}

export var startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
};

export var completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url
	}
};

export var fetchLocation = () => {

	return (dispatch, getState) => {
		dispatch(startLocationFetch());

		axios.get('http://ipinfo.io').then(function(res){
			var loc = res.data.loc;
			var baseURL = 'http://maps.google.com?q='

		dispatch(completeLocationFetch(baseURL + loc))
		})
	}

}