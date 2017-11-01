document.addEventListener("DOMContentLoaded", function(){

// header-menu

    var mobile = window.matchMedia("screen and (max-width: 536px)");
    var trigger = document.getElementById('burger');
    var nav = document.querySelector('nav');

    trigger.addEventListener('click',function(){

        var display = nav.style.display;
        if(display === 'block'){
            nav.style.display = 'none';
            nav.classList.remove("active-header-nav");

        } else {
            nav.style.display = 'block';
            nav.classList.add("active-header-nav");
        }
    });

    mobile.addListener( function(mob){
        if (!mob.matches) {
            nav.removeAttribute('style');
            nav.classList.remove("active-header-nav");
        }
    });

// slider

    //"The :scope pseudo-class restores the expected behavior, only matching selectors on descendants of the baseElement." - developer.mozilla.org

    var slider = document.querySelector('#main-slider');
    var prev = slider.querySelector(':scope .left');
    var next = slider.querySelector(':scope .right');
    var slides = slider.querySelectorAll(':scope .slide');
    var currentSlide = 0;
    var timer = null;
    var timeDelay = 5000;

    var timeoutNextSlide = function() {
        timer = setTimeout(function() {
            next.click();
        }, timeDelay);
    };

    var prevSlide = function() {
       
        for (var i=0; i<slides.length; i++) {
            slides[i].classList.remove('active');
        }
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length-1;
        }

        slides[currentSlide].classList.add('active');

        clearTimeout(timer);
        timeoutNextSlide();
    };

    var nextSlide = function() {
        
        for (var i=0; i<slides.length; i++) {
            slides[i].classList.remove('active');
        }

        currentSlide++;

        if (currentSlide > slides.length-1) {
            currentSlide = 0;
        }
        
        slides[currentSlide].classList.add('active');

        clearTimeout(timer);
        timeoutNextSlide();
    };

    timeoutNextSlide();

    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);





}); //end of DOMContentLoaded