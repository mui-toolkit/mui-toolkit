const myFunctions = require('../index.js');
const wrapped = test.wrap(myFunctions.addAdminRole);

wrapped(data, {
  auth: {
    uid: 'eqrjmljO97c2ccaabw9K'
  },
  authType: 'USER'
});
