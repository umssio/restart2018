/*
 Theme Name: Event4
 Theme URI: http://demo.newtemplate.net/event4/index.html
 Author: NewTemplate
 Author URI: https://themeforest.net/user/newtemplete
 Version: 0.1
 Description:  Event4 One Page HTML5 Theme comes out with tons of powerful features. Its modern, attractive and clean design.
 */


function myMap() {
    "use strict";
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(-17.3938633,-66.1478049), //
        zoom: 17
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}