import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/spritesheet/sprite.css';
import App from './components/blocks/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
