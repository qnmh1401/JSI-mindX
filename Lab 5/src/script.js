import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
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
const form = document.getElementById('input-cafe')
const ul = document.getElementById("list-cafe");
const renderCafe = (docs) => {
    
    const li = document.createElement("li");
    const name = document.createElement("span");
    const price = document.createElement("span")
    const cross = document.createElement("button")

    li.setAttribute("cafe-id", docs.id )
    name.textContent = docs.data().name
    price.textContent = docs.data().price
    cross.innerText = "X"

    li.appendChild(name)
    li.appendChild(price)
    li.appendChild(cross)
    ul.appendChild(li)

    cross.addEventListener("click", (e) =>{
        e.preventDefault()
        
        const id = e.target.parentElement.getAttribute("cafe-id")

        deleteDoc(doc(db, "cafes", id))
    })
}

const querySnapshot = await getDocs(collection(db, "cafes"));
querySnapshot.forEach((doc) => {
    renderCafe(doc);
});

form.addEventListener("submit",(e) =>  {
    e.preventDefault();
    const addName = e.target.name.value
    const addPrice = parseInt(e.target.price.value);
    addDoc(collection(db, "cafes"), {
        name: addName,
        price: addPrice
        
        
    });

    console.log(addName)
    console.log(addPrice)

    e.target.name.value = ''
    e.target.price.price = ''
   
})

const updateAgainList = (doc) => {
    renderCafe(doc)
}

const unsubscribe = onSnapshot(collection(db, "cafes"), (querySnapshot) => {
    ul.innerHTML =``
    querySnapshot.forEach((doc) => {
       updateAgainList(doc)
    })
  });


