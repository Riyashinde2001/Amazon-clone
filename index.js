const imgs=document.querySelectorAll(".slider-container ul img");
const prev_btn=document.querySelector("#prev-button");
const next_btn=document.querySelector("#next-button");

let n = 0;

function changeslide(){
//     for (let i =0; i < imgs.length; i++){
//         imgs[i].style.diaplay = 'none';
//     } 
imgs.forEach((img, index) => {
    img.style.display = 'none';
});


imgs[n].style.display = 'block';

}

changeslide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeslide();
})

next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeslide();
})


//////////////////////////////////// product list scroller/////////////////////

const scrollercontainer=document.querySelectorAll(".product-list2");
 for(const item of scrollercontainer ){
    item.addEventListener('wheel',(evt)=>{
       evt.preventDefault();
       item.scrollLeft += evt.deltaY; 
    });
 }

///////////////////////////// sing in form ////////////////////////////////////////////

// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const loginEmailError = document.getElementById('loginEmailError');
    const loginPasswordError = document.getElementById('loginPasswordError');

    // Validation function
    function validateForm() {
        let isValid = true;

        // Validate email
        if (!loginEmail.value.trim()) {
            loginEmailError.textContent = 'Email cannot be blank.';
            loginEmailError.style.visibility = 'visible';
            isValid = false;
        } else if (loginEmail.value.includes(' ')) {
            loginEmailError.textContent = 'Email must not contain spaces.';
            loginEmailError.style.visibility = 'visible';
            isValid = false;
        } else {
            loginEmailError.textContent = '';
            loginEmailError.style.visibility = 'hidden';
        }

        // Validate password
        if (!loginPassword.value.trim()) {
            loginPasswordError.textContent = 'Password cannot be blank.';
            loginPasswordError.style.visibility = 'visible';
            isValid = false;
        } else if (loginPassword.value.includes(' ')) {
            loginPasswordError.textContent = 'Password must not contain spaces.';
            loginPasswordError.style.visibility = 'visible';
            isValid = false;
        } else {
            loginPasswordError.textContent = '';
            loginPasswordError.style.visibility = 'hidden';
        }

        return isValid;
    }

    // Handle form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Simulate successful sign-in
            alert('Sign in successful!');
            loginForm.reset(); // Optionally reset form fields
            // Redirect to another page after successful sign-in
            // window.location.href = 'dashboard.html';
        }
    });

    // Handle create account button
    document.getElementById('toSignUpButton').addEventListener('click', () => {
        window.location.href = 'signup.html'; // Redirect to sign-up page
    });
});


////sign up
document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');
    const signUpEmail = document.getElementById('signUpEmail');
    const signUpPassword = document.getElementById('signUpPassword');
    const signUpConfirmPassword = document.getElementById('signUpConfirmPassword');
    const signUpEmailError = document.getElementById('signUpEmailError');
    const signUpPasswordError = document.getElementById('signUpPasswordError');
    const signUpConfirmPasswordError = document.getElementById('signUpConfirmPasswordError');

    // Validation function
    function validateForm() {
        let isValid = true;

        // Validate email
        if (!signUpEmail.value.trim()) {
            signUpEmailError.textContent = 'Email cannot be blank.';
            signUpEmailError.style.visibility = 'visible';
            isValid = false;
        } else if (signUpEmail.value.includes(' ')) {
            signUpEmailError.textContent = 'Email must not contain spaces.';
            signUpEmailError.style.visibility = 'visible';
            isValid = false;
        } else {
            signUpEmailError.textContent = '';
            signUpEmailError.style.visibility = 'hidden';
        }

        // Validate password
        if (!signUpPassword.value.trim()) {
            signUpPasswordError.textContent = 'Password cannot be blank.';
            signUpPasswordError.style.visibility = 'visible';
            isValid = false;
        } else if (signUpPassword.value.includes(' ')) {
            signUpPasswordError.textContent = 'Password must not contain spaces.';
            signUpPasswordError.style.visibility = 'visible';
            isValid = false;
        } else {
            signUpPasswordError.textContent = '';
            signUpPasswordError.style.visibility = 'hidden';
        }

        // Validate confirm password
        if (signUpConfirmPassword.value !== signUpPassword.value) {
            signUpConfirmPasswordError.textContent = 'Passwords do not match.';
            signUpConfirmPasswordError.style.visibility = 'visible';
            isValid = false;
        } else {
            signUpConfirmPasswordError.textContent = '';
            signUpConfirmPasswordError.style.visibility = 'hidden';
        }

        return isValid;
    }

    // Handle form submission
    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert('Account created successfully!'); // Show success message
            signUpForm.reset(); // Reset form fields
            // Optionally redirect to sign-in page after successful sign-up
            window.location.href = 'signin.html';
        }
    });

    // Handle sign-in button
    document.getElementById('toSignInButton').addEventListener('click', () => {
        window.location.href = 'signin.html'; // Redirect to sign-in page
    });
});
