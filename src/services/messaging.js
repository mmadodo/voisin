// src/services/messaging.js
import firebase from 'firebase/app'; // Assuming Firebase for messaging
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  // Firebase config details
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

export const sendMessage = (senderId, receiverId, message) => {
  db.ref(`messages/${senderId}/${receiverId}`).push({
    senderId,
    message,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  });
};
