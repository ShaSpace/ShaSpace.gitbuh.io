/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

// Moving through the carousel with the mouse wheel.

// Invokes the Carousel
$('#myCarousel').carousel({interval:3000});

$('#myCarousel').bind('mousewheel', function(e)
{
    if(e.originalEvent.wheelDelta /120 > 0)
    {
        $(this).carousel('next');
    }
    else
    {
        $(this).carousel('prev');
    }
});

