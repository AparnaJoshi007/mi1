import React from 'react';
import {render} from 'react-dom';
import Page from './components/page';

const App = props => (<Page data={props.data} />);

App.propTypes = {
  data: React.PropTypes.object
};
export default App;

if (typeof document !== 'undefined') {
  let props = document.getElementById('page-content').getAttribute('data-content');
  props = JSON.parse(props);
  render(<App data={props} />, document.getElementById('app'));
}
