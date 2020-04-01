import React from 'react';
import { shallow } from 'enzyme';

import Home from '../components/Home';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Home />, div);
// });

it('renders the Home component', () => {
  shallow(<Home />);
});

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it('renders with or without a name', () => {
// act(() => {
//   shallow(<Home />, container);
// });
// expect(container.textContent).toBe('Hey, stranger');
// act(() => {
//   shallow(<Home email="tues@fs.com" />, container);
// });
// expect(container.textContent).toBe(`Welcome, {user.email}`);
// });
