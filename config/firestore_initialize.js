const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: 'AIzaSyDStTo0z523d1exU3vXLEjtKPDmcMWRzk8',
  authDomain: 'crested-display-351313.firebaseapp.com',
  projectId: 'crested-display-351313',
  storageBucket: 'crested-display-351313.appspot.com',
  messagingSenderId: '642785080436',
  appId: '1:642785080436:web:faf3eba032f2d9eea7cd21',
  measurementId: 'G-GNE9NNLP78',
};
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
