import React from 'react';
import {render} from 'react-dom';
import Page from './components/page';

const App = props => (<Page data={props.data} authKey={props.authKey} />);

App.propTypes = {
  data: React.PropTypes.object
};
export default App;

if (typeof document !== 'undefined') {
  let props = document.getElementById('page-content').getAttribute('data-content');
  let authKey = document.getElementById('key').getAttribute('key-content');
  props = JSON.parse(props);
  render(<App data={props} authKey={authKey} />, document.getElementById('app'));
}
