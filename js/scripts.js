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

//Popover intiation
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Tooltip intiation
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Moving further down the page.

function scrollDown(x){
    
    // Takes the input to set the distance that the page will travel down
    var scrollDistance = x;

    window.scrollBy({
        top: scrollDistance,
        behavior: "smooth" // Allows the scroll bar to move at a constant rate, instead of instantaneously moving down
    });
}

function scrollToSection(sectionID){
    
    // Defines the section variable by assigning it the section idea input variable 
    var section = document.getElementById(sectionID);

    if(section){
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}


// Moving through the carousel with the mouse wheel.

document.addEventListener('wheel', function (e) {

    if($('#carouselHomePage').has(e.target).length){
        if(e.deltaY > 0) {
            $('#carouselHomePage').carousel('next');
        }
        else {
            if ($('#carouselHomePage').find('.carousel-item.active').index() !== 0) {
                $('#carouselHomePage').carousel('prev');
            }
        }
        //e.preventDefault();
    }
});


// This is for the carousel on the homepage
// It's so the videos stop playing after the slide is no longer there

document.addEventListener('DOMContentLoaded', function()
{
    var carousel = new bootstrap.Carousel(document.getElementById('carouselHomePage'), {
        interval: false, // No autmoatic scroll
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 && 
            rect.left >= 0 && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)    
        );
    }

    function handleVideoPlay()
    {
        var activeItem = document.querySelector('.carousel-item.active');
        var video = activeItem.querySelector('video');

        if(isElementInViewport(video))
        {
            video.play();
        }
        else {
            video.pause();
            video.currentTime=0;
        }
    }

    // Checks for the Video
    handleVideoPlay();

    document.getElementById('carouselHomePage').addEventListener('slid.bs.carousel', function(){
        handleVideoPlay();
    });
});
