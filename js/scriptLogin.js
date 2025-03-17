document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const toggleToRegister = document.getElementById("toggle-to-register");
    const toggleToLogin = document.getElementById("toggle-to-login");

    toggleToRegister.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });

    toggleToLogin.addEventListener("click", function (event) {
        event.preventDefault();
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "home.html";
    });
});