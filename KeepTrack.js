document.addEventListener('DOMContentLoaded', function () {
    var signupForm = document.getElementById('signup-form');
    var searchButton = document.getElementById('search-button');


    signupForm.addEventListener('submit', function (event) {

    event.preventDefault();
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

console.log('Name:', name);
    console.log('Email:', email);
        console.log('Password:', password);

    });
});