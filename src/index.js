// React
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import 'bulma/css/bulma.css'
import './index.css';

// Components
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
