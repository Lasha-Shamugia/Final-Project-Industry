let inputElement = document.getElementById("send-el");

inputElement.addEventListener("click", function () {
  alert("Thank you for share your opinion!");
});

// let plusButton = document.getElementById("plus-btn");

// plusButton.addEventListener("click", function() {
//   document.
// })

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