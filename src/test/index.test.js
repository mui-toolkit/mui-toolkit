// At the top of test/index.test.js
import '@firebase/functions';

const test = require('firebase-functions-test')(
  {
    databaseURL: 'https://mui-theme.firebaseio.com',
    storageBucket: 'mui-theme.appspot.com',
    projectId: 'mui-theme'
  },
  '../../serviceAccountKey.json'
);

it('should pass', () => {
  // meaningless test
  expect(1).toBe(1);
});
