// var submitButton = document.getElementById("btn");
// submitButton.addEventListener("click", handleClick);

// const email = document.getElementById("inputemail");
// const passWord = document.getElementById("inputpass");
// let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

// var showPass = document.getElementById("checkbox");
// var labelShow = document.getElementById("onpass");
// labelShow.innerText = "Show password";
// passWord.type = "password";

// checkbox.addEventListener("change", function () {
//   if (this.checked) {
//     passWord.type = "text";
//     labelShow.innerText = "Hide password";
//   } else {
//     passWord.type = "password";
//     labelShow.innerText = "Show password";
//   }
// });

// var formData = JSON.parse(localStorage.getItem("formData"));
// console.log(formData);

// JSON.parse(localStorage.getItem("formData")).some((data) =>
//   console.log(data.pwd)
// );

// function signIn(e) {
//   let email = document.getElementById("inputemail").value,
//     pwd = document.getElementById("inputpass").value;

//   let exist =
//     formData.length >= 0 &&
//     JSON.parse(localStorage.getItem("formData")).some(
//       (data) =>
//         data.email.toLowerCase() == email.toLowerCase() && data.pwd == pwd
//     );
//   if (!exist) {
//     alert("Incorrect login credentials");
   
//   } if(exist) {
//     window.location.href = "../HomePage.html";
//   }
// }

// function handleClick(e) {
//   var invalidEmail = document.getElementById("invalidemail");
//   var invalidPass = document.getElementById("invalidpass");

//   if (email.value == "") {
//     invalidEmail.innerText = "Email is empty";
//   } else if (!filter.test(email.value)) {
//     invalidEmail.innerText = "Wrong email";
//   } else {
//     invalidEmail.innerText = "";
//   }

//   if (passWord.value == "") {
//     invalidPass.innerText = "Password is empty";
//   } else if (passWord.value.length < 6) {
//     invalidPass.innerText = "Passwords must be at least 6 characters";
//   } else {
//     invalidPass.innerText = "";
//   }

//   if (
//     !email.value == "" &&
//     email != null &&
//     filter.test(email.value) &&
//     !passWord.value == "" &&
//     passWord != null &&
//     passWord.value.length >= 6
//   ) {
//     signIn(e);
//   } else {
//     e.preventDefault();
//   }
// }
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

  import { getAuth, GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

  import { getDatabase,ref, set } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDBl4gg0__bJpxH-CSZ1p6ulenmPMN9jBU",
    authDomain: "tripma-project.firebaseapp.com",
    projectId: "tripma-project",
    storageBucket: "tripma-project.appspot.com",
    messagingSenderId: "754977619387",
    appId: "1:754977619387:web:2b085899cc51caf0c6d89e",
    databaseURL: "https://tripma-project-default-rtdb.asia-southeast1.firebasedatabase.app"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const sighInWithGoogle = () =>{
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(err => {
      alert(err);
    })
  }

  const signOutGoogle = () =>{
    signOut(auth).then(() => {
     console.log("Google signed out");
    }).catch((error) => {
      alert(error);
    });
  }

  onAuthStateChanged(auth,(user) => {
    if(user) {
      console.log("You have authenticated");
    } else {
      
    }
  })

  const btnLoginWithGoogle = document.getElementById("btnLoginWithGoogle");
  const btnSignOutWithGoogle = document.getElementById("btnSignOutWithGoogle");

  btnLoginWithGoogle.addEventListener("click", () => {
    sighInWithGoogle();
  })

  btnSignOutWithGoogle.addEventListener("click", () => {
    signOutGoogle();
  })


  const signUp = async () => {
    const email = document.getElementById("inputemail").value;
    const firstName = document.getElementById("inputfirstname").value;
    const password = document.getElementById("inputpass").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // // Signed up 
    const userId = userCredential.user;
    
  const database = getDatabase();

    const user = {
      email,
      firstName
    }

    set(ref(database, 'users/' + userId.uid), user);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  const register = document.getElementById("btnRegister")

  register.addEventListener("click",() => {
       signUp();
  })