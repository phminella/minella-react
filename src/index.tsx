import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./store/store";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Firebase Analytics
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGhmA6O693I-Ol8DNbGiC_ag-L3Zytljs",
  authDomain: "minella-react.firebaseapp.com",
  projectId: "minella-react",
  storageBucket: "minella-react.appspot.com",
  messagingSenderId: "458243963384",
  appId: "1:458243963384:web:233a556fd97610f17b7e0d",
  measurementId: "G-MPEXSN1BFE"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);
//
//

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
