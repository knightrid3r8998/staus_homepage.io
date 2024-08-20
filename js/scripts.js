/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

// fancybox scripts
$("[data-fancybox='gallery']").fancybox({
    buttons: [
        "slideShow",
        "zoom",
        "fullScreen",
        "close",,
    ]
    loop : true,
    protected : true,
})

// capchta


const form = document.getElementById('contact_us_form');



