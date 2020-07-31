$(".nav .ui.search").css('width', $(".nav").outerWidth() - $(".nav .logo").outerWidth() - $(".nav .hamburger-ico").outerWidth() - 30);

$(document).ready(function() {

    $('.hamburger-menu .home').click(function() {
        $(".hamburger-menu").focusout();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
    });

    $('.hamburger-menu .contact').click(function() {
        $('a.linkNav')[2].click();
    });


    $('.hamburger-menu .aboutus').click(function() {
        $('a.linkNav')[3].click();
    });

    var HomeScrollobserver1 = new IntersectionObserver(function(entries) {
        if (entries[0]['isIntersecting'] === true) {
            if (entries[0]['intersectionRatio'] < 0.99)
                console.log('99')
                if (entries[0]['intersectionRatio'] > 0.8) {
                    console.log('.8')



            } else if (entries[0]['intersectionRatio'] < 0.7) {
                var scrollpos = localStorage.getItem('scrollpos');
                if (scrollpos < 5)
                document.getElementsByClassName("nav")[0].classList.remove('navBackground');
                else
                document.getElementsByClassName('nav')[0].classList.add('navBackground');
            }
              
        }
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.99, 1] }).observe(document.querySelector("#home"));

    // var MenuScrollobserver2 = new IntersectionObserver(function(entries) {
    //     if (entries[0]['isIntersecting'] === true) {


    //         if (entries[0]['intersectionRatio'] > 0.2) {

    //         }
    //     }
    // }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 1] }).observe(document.querySelector("#menu"));

    // var ContactScrollobserver1 = new IntersectionObserver(function(entries) {
    //     if (entries[0]['isIntersecting'] === true) {
    //         if (entries[0]['intersectionRatio'] > 0.4) {


    //         }
    //     }
    // }, { threshold: [0.5, 0.7, 1] }).observe(document.querySelector("#contact"));


    // var AboutUsScrollobserver3 = new IntersectionObserver(function(entries) {
    //     // since there is a single target to be observed, there will be only one entry
    //     if (entries[0]['isIntersecting'] === true) {
    //         if (entries[0]['intersectionRatio'] > 0.4) {


    //         }

    //     }
    // }, { threshold: [0.5, 0.7, 1] }).observe(document.querySelector("#aboutus"));

    window.addEventListener("scroll", function(event) {
        var scroll = this.scrollY;
        if (scroll < 5) {
            $('.nav').removeClass('navBackground');

        } else {
            $('.nav').addClass('navBackground');
        }
    });

    var scrolltoOffset = $('.nav').outerHeight();
    $('.hamburger-menu a').on('click', function(e) {
        var target = $(this.hash);
        if (target.length) {
            $(".hamburger-menu").focusout();
            e.preventDefault();

            var scrollto = target.offset().top - scrolltoOffset;

            $('html, body').stop().animate({
                scrollTop: scrollto
            }, 1500, 'easeInOutExpo');

        }
    });


    formcarry({
        form: "2yWXkx33Cow4",
        // id or the class name of the form element, only form element allowed
        // works with css selectors
        // # <= for id
        // . <= for class
        element: "#OrderForm",
        extraData: {
            // add whatever you want
            Ordered_Items: getCartData(),
        },
        // Success callback, you can show alert messages
        // or redirect the user in this function
        onSuccess: function(response) {
            alert("Your Order Has Been Placed Successfully!\nWe'll Contact You within 5 hrs");
        },
        // Error callback, a good place to show errors 🗿
        onError: function(error) {
            alert("Something Went Wrong!\nPlease Check Your Internet Connection!");
        }
    });

    tnsConfig = {
        // fixedWidth:300,
        // axis:"vertical"
        responsive: {
            1281:{
                gutter: 10,
                items: 5
            },
            1025: {
              gutter: 10,
              items: 4
            },
            880:{
               gutter: 10,
               items:4
            },
            768: {
               gutter: 10,
               items:3
            },
            481: {
              gutter: 10,
              items: 2.5
            },
            321:{
              gutter: 10,
              items: 2,
            },
          },
        // center: true,
        // slideBy: 'page',
        // startIndex: 1,
        autoplayHoverPause: true,
        autoplayButtonOutput: false,
        loop: false,
        items: 1,
        autoplay: true,
        mouseDrag: true,
        speed: 1000,
        controls: false,
        navPosition: 'bottom',
        gutter: 10,
        arrowKeys: true
    };

    // #prd-c3
    var prd_carausel1 = tns({ container: '#prd-c1', ...tnsConfig });
    var prd_carausel2 = tns({ container: '#prd-c2', ...tnsConfig });
    var prd_carausel3 = tns({ container: '#prd-c3', ...tnsConfig });

    let review_carausel = tns({
        container: '.review-slider',
        center: true,
        loop: true,
        controls: false,
        mouseDrag: true,
        autoHeight: true,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
    });

    $("#menu .product .prd-weight div").click(function() {
        $(this).parent().children(".selected").removeClass("selected")
        $(this).addClass("selected");
    });



    $('.addToCart').change(function() {
        if (this.checked) {
            $(this).parent().children(".cart-ico").stop().fadeOut(() => { $(this).parent().children(".tick-trigger").children(".trigger").toggleClass("drawn"); });
        } else {
            $(this).parent().children(".tick-trigger").children(".trigger").toggleClass("drawn");

            $(this).parent().children(".cart-ico").stop().fadeIn();

        }
    });


    $('.nav .hamburger-ico').click(function() {
        $(this).addClass('is-active');

        $('.side-menu').sidebar({
            dimPage: false,
            transition: 'overlay',
            mobileTransition: 'overlay',
        }).sidebar('toggle');
    });

    $('.ui.side-menu').accordion();



    categoryContent = [{ "category": "Cake", "title": "Chocolate syrup cake" }, { "category": "Cake", "title": "Black forest" }, { "category": "Cake", "title": "Chocolate truffel" }, { "category": "Cake", "title": "Dutch chocolate" }, { "category": "Cake", "title": "Ganache" }, { "category": "Cake", "title": "Chocolate cheese cake" }, { "category": "Cake", "title": "Pineapple" }, { "category": "Cake", "title": "Butter scotch" }, { "category": "Cake", "title": "Strawberry" }, { "category": "Cake", "title": "Pinacolada(tender coconut)" }, { "category": "Cake", "title": "Rasmalai" }, { "category": "Cake", "title": "Kulfi falooda" }, { "category": "Cake", "title": "Blue berry" }, { "category": "Cake", "title": "Paan" }, { "category": "Cake", "title": "Mango" }, { "category": "Cake", "title": "Orange" }, { "category": "Cake", "title": "Paani puri" }, { "category": "Cake", "title": "Merry berry" }, { "category": "Cake", "title": "Gulab jamun" }, { "category": "Cake", "title": "Honey cake" }, { "category": "Cake", "title": "Zebra marvel" }, { "category": "Cake", "title": "Red velvet" }, { "category": "Cake", "title": "Tiger cream cake" }, { "category": "Cake", "title": "Date cake (speciality)" }, { "category": "Cake", "title": "Plum cake (speciality)" }, { "category": "Cake", "title": "Marble" }, { "category": "Cake", "title": "Wine cake" }, { "category": "Cake", "title": "Sponge" }, { "category": "Cake", "title": "Mix fruit cake" }, { "category": "Cake", "title": "Trooty frooty cake" }, { "category": "Cake", "title": "Christmas cake" }, { "category": "Cake", "title": "Carwheel cake" }, { "category": "Cake", "title": "Doll cake" }, { "category": "Cake", "title": "Marble" }, { "category": "Cake Sides", "title": "Cake pops" }, { "category": "Cake Sides", "title": "Cakesical" }, { "category": "Cake Sides", "title": "Brownie" }, { "category": "Cake Sides", "title": "Tea time cake" }, { "category": "Cake Sides", "title": "Trooty frooty bread" }, { "category": "Cake Sides", "title": "Plum cake" }, { "category": "Cake Sides", "title": "Muffins" }, { "category": "Cake Sides", "title": "Cup cakes" }, { "category": "Cake Sides", "title": "Bake donut" }, { "category": "Cake Sides", "title": "Fried donut" }, { "category": "Cake Sides", "title": "Cinnamon roll" }, { "category": "Cake Sides", "title": "Sweet bread" }, { "category": "Bakery", "title": "Bread" }, { "category": "Bakery", "title": "Ladi pav" }, { "category": "Bakery", "title": "Brown bread" }, { "category": "Bakery", "title": "Garlic bread" }, { "category": "Bakery", "title": "Braided bread" }, { "category": "Bakery", "title": "Pizza base" }, { "category": "Bakery", "title": "Whole wheat pizza base" }, { "category": "Bakery", "title": "Burger bun" }, { "category": "Bakery", "title": "Whole wheat burger bun" }, { "category": "Bakery", "title": "Stuffed garlic bread" }, { "category": "Bakery", "title": "Pizza" }, { "category": "Bakery", "title": "Vegiee chesse" }, { "category": "Bakery", "title": "Paneery cheese" }, { "category": "Bakery", "title": "Soya cheese" }, { "category": "Bakery", "title": "Foccasia" }, { "category": "Bakery", "title": "Stuffed braided bread" }]

    $('.nav .ui.search').search({
        type: 'category',
        source: categoryContent,
        searchFields: [
            'title',
            'category'
        ]
    });
























});

function getCartData() {




    return true;
}