// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHQla4VEjUXpwHQOhKhGLdrROalgoolqs",
  authDomain: "nextfirebase-fab92.firebaseapp.com",
  databaseURL: "https://nextfirebase-fab92-default-rtdb.firebaseio.com",
  projectId: "nextfirebase-fab92",
  storageBucket: "nextfirebase-fab92.appspot.com",
  messagingSenderId: "1012172665541",
  appId: "1:1012172665541:web:ad2853e096841f93be36ac"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
