import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Store } from '../components/build/Store';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Home />, div);
// });

it('renders the Home component', () => {
  shallow(<Store />);
});
