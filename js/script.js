let inputElement = document.getElementById("send-el");
inputElement.addEventListener("click", function () {
  alert("Thank You for Sharing Your Opinion!");
});

let signButton = document.getElementById("sign-button");
signButton.addEventListener("click", function () {
  signButton.classList.toggle("newClassBtn");
});

let userElement = document.getElementById("subject");
userElement.addEventListener("keydown", function () {
  userElement.classList.add("newClass");
});

let user1Element = document.getElementById("lname");
user1Element.addEventListener("keydown", function () {
  user1Element.classList.add("newClassLname");
});

let user2Element = document.getElementById("fname");
user2Element.addEventListener("keydown", function () {
  user2Element.classList.add("newClassFname");
});


let buttonElement = document.getElementById("order-button");
buttonElement.addEventListener("click", function () {
  alert("Please visit our menu and choose a product to order it");
});

