
// This file bootstraps the entire application.
var React = require('react');
var ReactDOM = require('react-dom')
var Schedule = require('./components/Schedule.react');
var StaticData = require('./StaticData');

window.React = React; // export for http://fb.me/react-devtools

//StaticData.init(); // load example data into localstorage

ReactDOM.render(
    <Schedule />,
    document.getElementById('react')
);
