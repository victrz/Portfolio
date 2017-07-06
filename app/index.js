import App from './controller/App';

require('./main.scss');

let indexer = require('file-loader?name=../dist/index.html!./index.html');

let app = new App();
