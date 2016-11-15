import ReactDomServer from 'react-dom/server';
import React from 'react';
import express from 'express';
import path from 'path';
import fetch from 'isomorphic-fetch';
import App from './src/index';
import fs from 'fs';
import bodyParser from 'body-parser';
import auth from 'basic-auth';
import base32 from 'hi-base32';
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

const app = express();
const authKey = "BoomBasket";
const authToken = "123456789";
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const server = app.listen(process.env.PORT || 3000, () => {
  const serverAddress = server.address();
  console.log(`express server started @ ${serverAddress.port}`);
});

passport.use(new Strategy(
  function(token, cb) {
      if (token !== authToken) { return cb(new Error("No authorization"), false); }
      return cb(null, true);
}));

app.post('/updateclick',passport.authenticate('bearer', { session: false }), function(req, res) {
  let origin = req.get('origin');
  if(!origin || origin !== "http://localhost:3000") {
    console.log("Error occured");
  }
  else {
    let key = new Buffer(req.body.b, 'base64').toString('ascii');
    let value = req.body.a;
    if((key === authKey) && !(isNaN(value))) {
      let data;
      let obj = JSON.parse(fs.readFileSync('dist/count.json', 'utf8'));
      obj = obj.countList;
      for(let i=0; i < obj.length; i++) {
        if(obj[i]['id'] === value) {
          obj[i]['count'] += 1;
        }
      }
      data = JSON.stringify(obj);
      data = '{"countList":'+data+'}';
      fs.writeFile("dist/count.json", data , function(err) {
        if(err) {
           return console.log(err);
        }
        res.send('The file was saved!');
      });
    } else {
      console.log("Error occured");
    }
  }
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
      props = JSON.stringify(props);
      props = new Buffer(props).toString('base64');
      app.get('', (req, res) => {
      res.render('index', {ReactContainer: getReactMarkUp, pageContent: props });
    });
    });
