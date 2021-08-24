import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCvlcxSdma7gGq4eHKobP4A-TN4IyC9YaU",
  authDomain: "react-app-coderhouse.firebaseapp.com",
  projectId: "react-app-coderhouse",
  storageBucket: "react-app-coderhouse.appspot.com",
  messagingSenderId: "381339208227",
  appId: "1:381339208227:web:ceb4b5007dd8d600b4bf96"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)