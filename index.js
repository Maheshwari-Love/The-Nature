const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const nature = document.getElementById("nature");
const loginBtn = document.querySelector(".login");
const signupBtn = document.querySelector(".register");

card1.addEventListener("click", card1Visit);
card2.addEventListener("click", card2Visit);
card3.addEventListener("click", card3Visit);
card4.addEventListener("click", card4Visit);
card5.addEventListener("click", card5Visit);
card6.addEventListener("click", card6Visit);
loginBtn.addEventListener("click", loginPage);
signupBtn.addEventListener("click", signupPage);
function card1Visit() {
  window.open("https://en.wikipedia.org/wiki/Plitvice_Lakes_National_Park");
}
function card2Visit() {
  window.open("https://en.wikipedia.org/wiki/Great_Barrier_Reef");
}
function card3Visit() {
  window.open("https://en.wikipedia.org/wiki/Bamboo_Forest_(Kyoto,_Japan)");
}
function card4Visit() {
  window.open("https://en.wikipedia.org/wiki/Plitvice_Lakes_National_Park");
}
function card5Visit() {
  window.open("https://en.wikipedia.org/wiki/Plitvice_Lakes_National_Park");
}
function card6Visit() {
  window.open("https://en.wikipedia.org/wiki/Plitvice_Lakes_National_Park");
}
function linkvisit() {
  window.open("https://en.wikipedia.org/wiki/Nature");
}
function loginPage(){
  window.location.href = "Login/login.html"
}
function signupPage(){
  window.location.href = "SignUp/signup.html"
}