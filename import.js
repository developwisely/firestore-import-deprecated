const config = require('./config.js')
const data = require('./data.json');

const firebase = require("firebase");
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  projectId: config.PROJECT_ID
});
  
var db = firebase.firestore();


data && Object.keys(data).forEach(key => {
  const documents = data[key];
  var count = 1;

  documents.forEach(documentData => {
    db.collection(key)
      .add(documentData)
      .then((docRef) => {
        console.log(`"${key}" document ${count} of ${documents.length} added with ID: ${docRef.id}`);
        count++;
      })
      .catch((error) => {
        console.error(`Error adding document: ${error}`);
      });
  });
});