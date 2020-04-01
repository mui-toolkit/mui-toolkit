import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Dashboard from '../components/Dashboard';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Home />, div);
// });

it('renders the dashboard component', () => {
  shallow(<Dashboard />);
});
