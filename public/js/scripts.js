const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = firebase.auth;

const auth = getAuth();

// Your event listeners and Firebase authentication logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
  
    // Sign in the user with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User logged in:', user);
        // Redirect or show success message
        // Redirect the user to a new page after successful login
         window.location.href = "new_page.html"; // Replace "new_page.html" with the URL of your new page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login error:', errorMessage);
        // Display error message to the user
      });
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
  
    // Sign up the user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('User signed up:', user);
        // Redirect or show success message
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Signup error:', errorMessage);
        // Display error message to the user
      });
});
