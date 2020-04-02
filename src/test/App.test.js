import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// it('renders welcome message', () => {
//   const { getByText } = render(<App />);
//   expect(getByText('Learn React')).toBeInTheDocument();
// });
