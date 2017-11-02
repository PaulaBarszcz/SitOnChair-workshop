document.addEventListener("DOMContentLoaded", function(){

// header-menu

    var manageMenu = function () {
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
    } //end of manageMenu definition

    manageMenu();

// slider

    //"The :scope pseudo-class restores the expected behavior, only matching selectors on descendants of the baseElement." - developer.mozilla.org


    var manageSlider = function () {

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

    } //end of manageSlider definition

    manageSlider();


// application
  
    var manageApp = function() {
        var drop_down_lists = document.querySelectorAll(".drop_down_list");
        console.log(drop_down_lists); 
        var list_arrows = document.querySelectorAll(".list_arrow");
        console.log(list_arrows.length);
        var list_panels = document.querySelectorAll(".list_panel");
        console.log(list_panels);

        for (var j=0; j<list_panels.length; j++) {
            console.log("list panels display to empty");
            list_panels[j].style.display = "none";
        }

        //list_panels[0].style.display = "block";

        for (var i=0; i<list_arrows.length; i++) {

            //this.nextElementSibling.style.display = "";
            //console.log(this.nextElementSibling.style.display); 
            list_arrows[i].addEventListener("click", function () {
                var vis=0;
                if (this.nextElementSibling.style.display === "block") {
                    this.nextElementSibling.style.display = "none"; 

                }

                else if  (this.nextElementSibling.style.display === "none") {
                    this.nextElementSibling.style.display = "block";

                }
            });

        }
    }

    manageApp();


}); //end of DOMContentLoaded