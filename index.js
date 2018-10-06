var index=1;
setInterval(function(){ showim(index++); }, 3000);
function showim(n) {
var i;
var x=document.getElementsByClassName("slide");
if(n==x.length) {index=1;}
if(n<1) {index=x.length;}
for(i=0;i<x.length;i++)
{x[i].style.opacity=0;}
x[index-1].style.opacity=1;
}

window.onscroll = function() {showMenu()};

function showMenu() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
document.getElementById("header").style.height="3em";
document.getElementById("title2").style.opacity="0";
document.getElementById("social").style.opacity="0";
document.getElementById("menu").style.top="3em";
document.getElementById("services").style.top="4.5em";}
else{
document.getElementById("header").style.height="6.25em";
document.getElementById("title2").style.opacity="1";
document.getElementById("social").style.opacity="1";
document.getElementById("menu").style.top="6.25em";
document.getElementById("services").style.top="6.5em";}
}

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "abc" && password == "abc123"){
document.getElementById("logsign").style.opacity="0";
document.getElementById("logsign").style.visibility="hidden";
document.getElementById("user").innerHTML=`Welcome ${username}`;
}
else{
alert("Wrong Username or Password. Try Again.");
}
}


