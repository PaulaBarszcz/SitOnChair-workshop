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

        if (window.matchMedia("(max-width: 590px)").matches) {
            var secondLevelMenuTrigger = document.querySelector(".header-nav ul li");
            secondLevelMenuTrigger.addEventListener('click',function(){
                var ulInner = secondLevelMenuTrigger.querySelector("ul");
                console.log('p',ulInner.style.display);
                ulInner.style.display=(ulInner.style.display === 'none' ? 'block' : 'none');
            });
        } 

        if (window.matchMedia("(min-width: 590px)").matches) {
            var secondLevelMenuTrigger = document.querySelector(".header-nav ul li");
            secondLevelMenuTrigger.addEventListener('click',function(){
                var ulInner = secondLevelMenuTrigger.querySelector("ul");
                console.log('p',ulInner.style.display);
                ulInner.style.display=(ulInner.style.display === 'none' ? 'block' : 'none');
            });
        } 

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
        var list_arrows = document.querySelectorAll(".list_arrow");
        var list_panels = document.querySelectorAll(".list_panel");
        var form_application = document.querySelector(".form-application");
        var lis = form_application.querySelectorAll("li");
        var checkbox_label = document.querySelector(".checkbox-label");
        var id_transport  = document.getElementById("transport");
        var summary_part = document.querySelector(".summary_part");
        var panel_right = summary_part.querySelector(".panel_right");
        var right_title = panel_right.querySelector(".title");
        var right_color = panel_right.querySelector(".color");
        var right_pattern = panel_right.querySelector(".pattern");
        var right_transport = panel_right.querySelector(".transport");
        var list_label = form_application.querySelectorAll(".list_label");
        var summary_panel = document.querySelector(".summary_panel");
        var summary_title = summary_panel.querySelector(".title");
        var summary_color = summary_panel.querySelector(".color");
        var summary_pattern = summary_panel.querySelector(".pattern");
        var summary_transport = summary_panel.querySelector(".transport");
        var sum_final = summary_panel.querySelector(".sum");
        

        for (var j=0; j<list_panels.length; j++) {
            list_panels[j].style.display = "none";
        }


        for (var i=0; i<list_arrows.length; i++) {
 
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

        var sum = 0;
        var chair_value = 0;
        var color_value = 0;
        var pattern_value = 0;
        var transport_value = 0;

        for (var i=0; i<3; i++) {
            lis[i].addEventListener("click", function () {
                this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
                summary_title.innerText = "Chair "+this.innerText;
                right_title.innerText = this.dataset.price;
                chair_value=parseInt(right_title.innerText, 10);

                    sum = transport_value + color_value + pattern_value + chair_value;
                    sum_final.innerText = sum + "zl";
            });
        }

        for (var i=3; i<6; i++) {
            lis[i].addEventListener("click", function () {
                this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
                    summary_color.innerText = this.innerText;
                    right_color.innerText = this.dataset.price;
                    color_value=parseInt(right_color.innerText, 10); 

                        sum = transport_value + color_value + pattern_value + chair_value;
                        sum_final.innerText = sum + "zl";
            });
        }

        for (var i=6; i<8; i++) {
            lis[i].addEventListener("click", function () {
                this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
                    summary_pattern.innerText = this.innerText;
                    right_pattern.innerText = this.dataset.price;
                    pattern_value=parseInt(right_pattern.innerText, 10); 

                        sum = transport_value + color_value + pattern_value + chair_value;
                        sum_final.innerText = sum + "zl";
            });
        }

        id_transport.addEventListener("click", function() {
            summary_transport.innerText = "Transport";
            if  (id_transport.checked===true) {
                right_transport.innerText = this.dataset.price;
            }
            else {
                right_transport.innerText = 0;
            }
            transport_value=parseInt(right_transport.innerText, 10);
                sum = transport_value + color_value + pattern_value + chair_value;
                sum_final.innerText = sum + "zl";
        })
    }

    manageApp();

}); //end of DOMContentLoaded