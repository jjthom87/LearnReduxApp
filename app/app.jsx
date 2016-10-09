var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

//calls all of the files here and renders to the html page
// ReactDOM.render(
// 	<p>Boilerplate 3 Project</p>,
// 	document.getElementById('app')
// );		

require('./redux-example.jsx');

// require('./redux-todo-example.jsx');
