//------------------------------- MODAL PAGE--------------------------------------------// 
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");

document.getElementById("openLogin-2").onclick = () => loginModal.style.display = "block";
document.getElementById("openLogin").onclick = () => loginModal.style.display = "block";
document.getElementById("closeLogin").onclick = () => loginModal.style.display = "none";
document.getElementById("closeRegister").onclick = () => registerModal.style.display = "none";

window.onclick = (e) => {
    if (e.target === loginModal) loginModal.style.display = "none";
    if (e.target === registerModal) registerModal.style.display = "none";
};
// Switch from login to register
document.getElementById("openRegisterFromLogin").onclick = (e) => {
    e.preventDefault();
    loginModal.style.display = "none";
    registerModal.style.display = "block";
};

// Optional: Handle login/register form submit
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Logged in!");
    loginModal.style.display = "none";
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registered successfully!");
    registerModal.style.display = "none";
});

// HAMBURGER TOGGLE//

$(document).ready(function () {
    $('#nav-toggler').click(function () {
        $('#mobile-nav').addClass('active');
        $('#overlay').addClass('active');
    });

    $('#nav-close, #overlay').click(function () {
        $('#mobile-nav').removeClass('active');
        $('#overlay').removeClass('active');
    });
});
// slide text//
$(document).ready(function () {
    $(".flip-1").click(function () {
        $(".panel-1").slideToggle("slow");
    });
    $(".flip-2").click(function () {
        $(".panel-2").slideToggle("slow");
    });
    $(".flip-3").click(function () {
        $(".panel-3").slideToggle("slow");
    });
    $(".flip-4").click(function () {
        $(".panel-4").slideToggle("slow");
    });
    $(".flip-5").click(function () {
        $(".panel-5").slideToggle("slow");
    });
});