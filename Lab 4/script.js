// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC41bChKR7Dc25hgTsbT8B5VvUK4rEjaX4",
  authDomain: "trimpa-project.firebaseapp.com",
  databaseURL: "https://trimpa-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trimpa-project",
  storageBucket: "trimpa-project.appspot.com",
  messagingSenderId: "380204936218",
  appId: "1:380204936218:web:46062323df74daa3f735a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const ul = document.getElementById("list-cafe");
const renderCafe = (doc) => {
    
    const li = document.createElement("li");
    const name = document.createElement("span");
    const price = document.createElement("span")

    name.textContent = doc.data().name
    price.textContent = doc.data().name

    li.appendChild(name)
    li.appendChild(price)
    ul.appendChild(li)
}

const querySnapshot = await getDocs(collection(db, "cafes"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, doc.data());
});

    renderCafe(doc)