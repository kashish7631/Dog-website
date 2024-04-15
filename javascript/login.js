const loginWrapper = document.querySelector(".login-wrapper"),
signuph1 = document.querySelector(".signup h1"),
loginh1 = document.querySelector(".login h1");

 loginh1.addEventListener("click",() =>{
  loginWrapper.classList.add("active");
 });

 signuph1.addEventListener("click",() =>{
  loginWrapper.classList.remove("active");
 });
