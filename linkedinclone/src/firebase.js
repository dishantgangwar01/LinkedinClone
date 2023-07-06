import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCtNCMw2B8f7VJExprLE9XAQIQXdzijPNQ",
  authDomain: "linkedinclone-c18dc.firebaseapp.com",
  projectId: "linkedinclone-c18dc",
  storageBucket: "linkedinclone-c18dc.appspot.com",
  messagingSenderId: "943606035574",
  appId: "1:943606035574:web:05dee5851970f6822f9b57"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
