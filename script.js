import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
};

firebase.initializeApp(firebaseConfig);

function generateIdToken() {
  var customTokenInput = document.getElementById('customTokenInput');
  var customToken = customTokenInput.value;

  firebase.default
    .auth()
    .signInWithCustomToken(customToken)
    .then(() => {
      return firebase.default.auth().currentUser.getIdToken();
    })
    .then((idToken) => {
      var idTokenDisplay = document.getElementById('idTokenDisplay');
      idTokenDisplay.textContent = 'ID Token: ' + idToken;
    })
    .catch((error) => {
      console.error('Error generating ID Token:', error);
    });
}
