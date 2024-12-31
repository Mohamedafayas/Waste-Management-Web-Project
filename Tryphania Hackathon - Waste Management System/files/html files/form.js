// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4DxSKN7cmKGXMDSmxE1jpxcLZpz6fijE",
  authDomain: "login-signup-5fcf9.firebaseapp.com",
  databaseURL: "https://login-signup-5fcf9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-signup-5fcf9",
  storageBucket: "login-signup-5fcf9.appspot.com",
  messagingSenderId: "1016422222631",
  appId: "1:1016422222631:web:f2f2083f1f603b0dc9b702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



document.getElementById('login-btn').addEventListener('click',function(){
    const LoginEmail = document.getElementById("login-email").value;
    const LoginPassword = document.getElementById("login-password").value;
    
        signInWithEmailAndPassword(auth, LoginEmail, LoginPassword)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Welcome");
        window.open("index.html");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  });
});
document.getElementById('reg-btn').addEventListener('click',function(){
    const RegEmail = document.getElementById("register-email").value;
    const RegPassword = document.getElementById("register-password").value;
    
    createUserWithEmailAndPassword(auth, RegEmail, RegPassword)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Welcome");
        window.open("index.html");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  });
});
