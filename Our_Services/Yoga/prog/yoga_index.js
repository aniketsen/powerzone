window.onscroll = function() {showMenu()};

function showMenu() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
document.getElementById("header").style.height="3em";
document.getElementById("title2").style.opacity="0";
document.getElementById("social").style.opacity="0";
document.getElementById("menu").style.top="3em";
document.getElementById("yogaNavBar").style.top="6.75em"}
else{
document.getElementById("header").style.height="6.25em";
document.getElementById("title2").style.opacity="1";
document.getElementById("social").style.opacity="1";
document.getElementById("menu").style.top="6.25em";
document.getElementById("yogaNavBar").style.top="10em"}
}