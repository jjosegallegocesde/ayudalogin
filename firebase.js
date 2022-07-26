// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhV7bMsEHCJab3-VlhQVOHrceZMGxg74g",
  authDomain: "fotoshotelbs.firebaseapp.com",
  projectId: "fotoshotelbs",
  storageBucket: "fotoshotelbs.appspot.com",
  messagingSenderId: "1016356134599",
  appId: "1:1016356134599:web:a516b53a49dd01b3bba8e2",
  measurementId: "G-08ZL3WMVNS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);