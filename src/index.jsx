require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Internships from './app';
import "./scss/main.scss";

var mountNode = document.getElementById('app');

ReactDOM.render(<Internships/>, mountNode); 