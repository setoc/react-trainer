import Express from 'express';
const app = new Express();
import serverConfig from './config';

import Path from 'path';

import Helmet from 'helmet';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/app.jsx';
import template from './template.js';

console.log('static folder: ' + Path.join(__dirname, '../public'));
app.use('/', Express.static(Path.join(__dirname, '../public')));

app.get('/stuff', (req, res) => {
    const isMobile = true;
    const initialState = { isMobile };
    const appstring = ReactDOMServer.renderToString(<App {...initialState} />);
    res.send(template({
        body: appstring,
        title: 'Hello world from server',
        initialState: JSON.stringify(initialState)
    }));
});


app.get('/api', function (req, res) {
    res.send('Hello world');
});



app.listen(serverConfig.port, function () {
    console.log(`listening on port ${serverConfig.port}`);
});