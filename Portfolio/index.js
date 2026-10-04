var typed = new Typed(".text", {
    strings: [ "WEB DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const form = document.querySelector(".contact-form");

//menu bar 
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const textInput = document.querySelector("#text");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", function(event) {
      let isValid = true;
    event.preventDefault();
  

    if (nameInput.value === "") {
        alert("Please enter your name");
        isValid = false;
    }
    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value === "") {
        alert("Please enter your email");
        isValid = false;
    }
     else if (!emailPattern.test(emailInput.value)) {
    alert("Please enter a valid email");
    isValid = false;
      }
    
    if (textInput.value === "") {
        alert("Enter proper text");
        isValid = false;
    }
    if (messageInput.value === "") {
         alert("Enter proper message!!!");
         isValid = false;
    }
    if (isValid) {
    alert("Message sent successfully!");
    form.reset();
     }
});

menuIcon.addEventListener("click",function(){
           navbar.classList.toggle("active");

});