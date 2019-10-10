const firebase = require("firebase");

firebase.initializeApp({
    apiKey: 'AIzaSyA7SE96UA4z4e8NJUaQANvDO-GA7qXkWyY',
    authDomain: 'oct10project.firebaseapp.com',
    databaseURL: 'https://oct10project.firebaseio.com',
    projectId: 'oct10project',
    storageBucket: 'oct10project.appspot.com',
    messagingSenderId: '96545103937',
    appId: '1:96545103937:web:75d77eede47192edc6e6c0',
    measurementId: 'G-F7TXJJ8KV2'
});
console.log('Initialized firestore');

const store = firebase.firestore();

store
    .collection('users')
    .add({
        first: 'Chenith',
        last: 'Ishanga',
        born: 1989
    })
    .then(function (docRef) {
        console.log('Doc written with id: ', docRef.id);
        console.log('Doc: ', docRef);
    })
    .catch(function (err) {
        console.error('Err inserting doc ', err);
    });


