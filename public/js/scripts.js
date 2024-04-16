import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

//const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = firebase.auth;
const auth = getAuth();

// Your event listeners and Firebase authentication logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
  
    // Check if the user is new or existing
    auth.fetchSignInMethodsForEmail(email)
      .then((signInMethods) => {
        if (signInMethods.length === 0) {
          // The user is new, sign them up
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              console.log('User signed up:', user);
              // Redirect or show success message
            })
            .catch((error) => {
              const errorMessage = error.message;
              console.error('Signup error:', errorMessage);
              // Display error message to the user
              // You can append this error message to a <div> in your HTML to display it to the user
              document.getElementById('signupError').innerText = errorMessage;
            });
        } else {
          // The user is existing, sign them in
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log('User signed in:', user);
              // Redirect or show success message
            })
            .catch((error) => {
              const errorMessage = error.message;
              console.error('Login error:', errorMessage);
              // Display error message to the user
              // You can append this error message to a <div> in your HTML to display it to the user
              document.getElementById('loginError').innerText = errorMessage;
            });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Error:', errorMessage);
        // Display error message to the user
        // You can append this error message to a <div> in your HTML to display it to the user
        document.getElementById('loginError').innerText = errorMessage;
      });
});