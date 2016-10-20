import React from 'react';
import {render} from 'react-dom';
import fetch from 'isomorphic-fetch';
import Page from './components/page';
//import data from './mock-content';

const App = props => (<Page data={props.data} />);


export default App;

if (typeof document !== 'undefined') {
	let data = fetch('http://localhost:3000/mock-content.json')
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((props) => {
        render(<App data={props} />, document.getElementById('app'));
    });
}
