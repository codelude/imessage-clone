import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOYNeR2UbTfQDsc4kMN7mIbJDagbXFD-E",
  authDomain: "imessage-clone-yt.firebaseapp.com",
  databaseURL: "https://imessage-clone-yt.firebaseio.com",
  projectId: "imessage-clone-yt",
  storageBucket: "imessage-clone-yt.appspot.com",
  messagingSenderId: "1052063688073",
  appId: "1:1052063688073:web:b9a3128fce5a2d3aeeed58",
  measurementId: "G-H2VHP9RFFJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
