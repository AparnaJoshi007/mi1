import ReactDomServer from 'react-dom/server';
import React from 'react';
import express from 'express';
import path from 'path';
import fetch from 'isomorphic-fetch';
import App from './src/index';

const app = express();
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static('dist'));
const server = app.listen(process.env.PORT || 3000, () => {
  const serverAddress = server.address();
  console.log(`express server started @ ${serverAddress.port}`);
});
fetch('http://localhost:3000/mock-content.json')
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((props) => {
      const getReactMarkUp = ReactDomServer.renderToString(<App data={props} />);
      app.get('', (req, res) => {
      res.render('index', {ReactContainer: getReactMarkUp, pageContent: JSON.stringify(props) });
    });
    });
