var titles = ["ALLIANCE WITH BRAZIL", "NEWEST COUNTRY GAME", "COMMONWEALTH OF NATIONS", "NEW WEBSITE"];
var dates = ["3/4/24", "12/12/23", "9/2/23", "9/2/23"];
var articles = ["The Dingabadonga Military has allied with Brazil, a county owned by Andrew Fogelsonger, in Adam's 2024 country game.", "The newest country game of 2023 it looking for more people to sign up! If you are interested in participating, fill out the form link in this article. https://forms.gle/mNCVJAnmwjcGRiXk7", "The Dingabadonga Military starts the new school year off with new alliances. The Commonwealth of Nations, owned by Adam Olszewski, is the new country game for this school year.", "The Dingabadonga Military launches their new website. This new website has a better design and includes all of the same features from the original website. Site security and user accessibility has also been improved."];
var article = 0;
function right() {
article += 1;
if (article === articles.length) {
article = 0;
}
document.getElementById("title").textContent = titles[article];
document.getElementById("date").textContent = dates[article];
document.getElementById("text").textContent = articles[article];
}
function left() {
article -= 1;
if (article < 0) {
article = articles.length - 1;
}
document.getElementById("title").textContent = titles[article];
document.getElementById("date").textContent = dates[article];
document.getElementById("text").textContent = articles[article];
}
document.getElementById("title").textContent = titles[article];
document.getElementById("date").textContent = dates[article];
document.getElementById("text").textContent = articles[article];
document.addEventListener("click", e => {
if (e.target.className === "button" || e.target.textContent === "close") {
document.getElementById("menu").style.right = "-100%";
}
})
function openMenu() {
document.getElementById("menu").style.right = 0;
}
function changeHash(hash) {
location.hash = "";
location.hash = hash;
}
