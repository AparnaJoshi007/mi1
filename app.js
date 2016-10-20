import ReactDomServer from 'react-dom/server';
import React from 'react';
import App from './src/index.js';
import express from 'express';
var app = express();
	app.set('views',__dirname+'/views');
	app.set('view engine','ejs');
	app.use(express.static('dist'));
	var server = app.listen(process.env.PORT || 3000, function(){
		var serverAddress = server.address();
			console.log("express server started @ "+serverAddress.port);
	});
let data = fetch('http://localhost:3000/mock-content.json')
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((props) => {
		let getReactMarkUp = ReactDomServer.renderToString(<App data={props} />);
		app.get('',function(req,res){
  		res.render('index',{ReactContainer: getReactMarkUp});
	});
    });

