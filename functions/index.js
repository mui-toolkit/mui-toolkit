const functions = require('firebase-functions');
const admin = require('firebase-admin');

const cors = require('cors')({ origin: true });
// const functions = require('firebase-functions');

// const app = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
//         // Your app stuff here

//         // Send Response
//         res.status(200).send(<response data/>);
//     });
// });
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  // get user and add admin custom claim
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin.`
      };
    })
    .catch(err => {
      return err;
    });
});
