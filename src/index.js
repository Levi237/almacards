import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';

import dotenv from 'dotenv';
dotenv.config();


firebase.initializeApp({
  apiKey: "AIzaSyCqTKCU8-rk8XaZO9uAiU-TT4MdWmNOeJY",
  authDomain: "almacards.firebaseapp.com",
  projectId: "almacards",
  storageBucket: "almacards.appspot.com",
  messagingSenderId: "1026487896806",
  appId: "1:1026487896806:web:3b38fa2d7ef47955354927",
  measurementId: "G-TZDZ0VMLYN"
});
const storage = firebase.storage();
export { storage, firebase as default }

ReactDOM.render(
  <Router>
      <App />
  </Router>, 
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();