import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
// client side react bootstrap
render(<App {...window.__APP_INITIAL_STATE__} />, document.getElementById('root'));
