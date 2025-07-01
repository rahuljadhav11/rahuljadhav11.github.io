import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "antd/dist/reset.css";
// import App from './app/App';
import DataEngineeringPortfolio from './v2/app/aiPortfolio';
import * as serviceWorker from './v1/app/serviceWorker';

ReactDOM.render(<DataEngineeringPortfolio />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
