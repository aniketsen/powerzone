window.onscroll = function() {showMenu()};

function showMenu() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
document.getElementById("header").style.height="3em";
document.getElementById("title2").style.opacity="0";
document.getElementById("social").style.opacity="0";
document.getElementById("menu").style.top="3em";}
else{
document.getElementById("header").style.height="6.25em";
document.getElementById("title2").style.opacity="1";
document.getElementById("social").style.opacity="1";
document.getElementById("menu").style.top="6.25em";}
}

function initMap() {
var uluru = {lat: 12.9374799, lng: 77.5731221};
var map = new google.maps.Map(document.getElementById('map'), {zoom: 17, center: uluru, gestureHandling: 'cooperative'});
var marker = new google.maps.Marker({position: uluru, map: map});
}