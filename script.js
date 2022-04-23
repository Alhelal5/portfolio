$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20 ){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-button').addClass("show");
        }else{
            $('.scroll-up-button').removeClass("show");
        }
    });
    
    // slide-up script 
$('.scroll-up-button').click(function(){
    $('html').animate({scrollTop: 0});
});

    // toggle menu / navbar 

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



    var typed = new Typed(".type-0", {
        strings: ["Web Designer", "Developer", "Content Writer", "Traveler"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".type-1", {
        strings: ["Web Designer", "Developer", "Content Writer", "Traveler"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });




// typing animation script 




    // owl-carousel scripts 

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }

    });
});


