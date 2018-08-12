import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(<Router><Route render={() => <App/>}/></Router>, document.getElementById('root'));
registerServiceWorker();
