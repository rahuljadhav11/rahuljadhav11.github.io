import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './v3/Portfolio';
import * as serviceWorker from './v1/app/serviceWorker';

ReactDOM.render(<Portfolio />, document.getElementById('root'));

serviceWorker.unregister();
