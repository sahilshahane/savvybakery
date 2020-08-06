$(".nav .ui.search").css('width', $(".nav").outerWidth() - $(".nav .logo").outerWidth() - $(".nav .hamburger-ico").outerWidth() - 30);

$(document).ready(function () {

    function ScrollToElement(scrollTo,Speed=0,AnimationType="linear",callback=null){
        var scrolltoOffset = $('.nav').outerHeight();
        
         scrollTo = scrollTo.offset().top - scrolltoOffset;

        $('html, body').stop().animate({
            scrollTop: scrollTo
        }, Speed, AnimationType,callback);

    }


    

    // var HomeScrollobserver1 = new IntersectionObserver(function(entries) {
    //     if (entries[0]['isIntersecting'] === true) {
    //             if (entries[0]['intersectionRatio'] < 0.7) {
    //             var scrollpos = localStorage.getItem('scrollpos');
    //             if (scrollpos < 5)
    //             document.getElementsByClassName("nav")[0].classList.remove('navBackground');
    //             else
    //             document.getElementsByClassName('nav')[0].classList.add('navBackground');
    //         }
    //     }
    // }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.99, 1] }).observe(document.querySelector("#home"));


    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        if (scroll < 5) {
            $('.nav').removeClass('navBackground');

        } else {
            $('.nav').addClass('navBackground');
        }
    });


    $('#side-nav-bar a').on('click', function (e) {
        var target = $($(this).attr('scroll-id'));
        if (target.length) {
            $('.ui.sidebar').sidebar('toggle');
            e.preventDefault();
            ScrollToElement(target,700,'easeInOutExpo');
        }
    });

    // formcarry({
    //     form: "2yWXkx33Cow4",
    //     // id or the class name of the form element, only form element allowed
    //     // works with css selectors
    //     // # <= for id
    //     // . <= for class
    //     element: "#OrderForm",
    //     extraData: {
    //         // add whatever you want
    //         Ordered_Items: getCartData(),
    //     },
    //     // Success callback, you can show alert messages
    //     // or redirect the user in this function
    //     onSuccess: function(response) {
    //         alert("Your Order Has Been Placed Successfully!\nWe'll Contact You within 5 hrs");
    //     },
    //     // Error callback, a good place to show errors 🗿
    //     onError: function(error) {
    //         alert("Something Went Wrong!\nPlease Check Your Internet Connection!");
    //     }
    // });

    let carousel_settings = {
        perPage: 5,
        gap: 10,
        focus: 'center',
        start: 0,
        breakpoints: {
            1281: {
                perPage: 5
            },
            1025: {

                perPage: 4
            },
            880: {
                perPage: 4
            },
            720: {

                perPage: 3
            },
            600: {
                perPage: 3
            },
            481: {

                perPage: 1.4
            },
            321: {
                perPage: 1,
            },
        },
        // autoplay: true,
        pagination: false,
        // interval: 3000,
        trimSpace: false,

    };

    var prd_carausel1 = new Splide('#prd-c1', carousel_settings);
    var prd_carausel2 = new Splide('#prd-c2', carousel_settings);
    var prd_carausel3 = new Splide('#prd-c3', carousel_settings);

    // prd_carausel1.mount(window.splide.Extensions);
    // prd_carausel2.mount(window.splide.Extensions);
    // prd_carausel3.mount(window.splide.Extensions);

    window.prd_carausel1 = prd_carausel1;

    prd_carausel1.mount();
    prd_carausel2.mount();
    prd_carausel3.mount();

    function slideToProduct(productElement,productCategoryElement,productSlideNumber){
        var categoryName = productCategoryElement.attr('id');
        if(categoryName=="chocolate_base")
        splideObject = prd_carausel1;
        else if(categoryName=="vanilla_base")
        splideObject = prd_carausel2;
        else if(categoryName=="flavoured_specials")
        splideObject = prd_carausel3;
        

        splideObject.go(productSlideNumber);
    }



    if(location.hash){
        navigationData =location.hash.substr(1);
        if(navigationData.substring(0,7)=="Product"){
            viewType = navigationData[8];
            if(viewType=="E"){}
            else if(viewType=="I"){
               var productElement = $("#"+navigationData.substr(10));           
               var productCategoryElement = $((productElement).closest('.product-carousel').attr('productCategory'));
               var productSlideNo = Number.parseInt(productElement.attr('slideNo'));

            setTimeout(function() {
                ScrollToElement(productCategoryElement,200,'linear',()=>{

                    slideToProduct(productElement,productCategoryElement,productSlideNo);
                })
        },500);
            }
        }
    }

    let review_cauraosel = new Splide('#review', {
        perPage: 1,
        arrows: false,
        pagination: false,
        autoplay: true,
        interval: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    review_cauraosel.mount();

    $("#menu .product .prd-weight div").click(function () {
        $(this).parent().children(".selected").removeClass("selected")
        $(this).addClass("selected");
    });



    $('.addToCart').change(function () {
        if (this.checked) {
            $(this).parent().children(".cart-ico").stop().fadeOut(() => {
                $(this).parent().children(".tick-trigger").children(".trigger").toggleClass("drawn");
            });
        } else {
            $(this).parent().children(".tick-trigger").children(".trigger").toggleClass("drawn");

            $(this).parent().children(".cart-ico").stop().fadeIn();

        }
    });


    $('.nav .hamburger-ico').click(function () {
        $(this).addClass('is-active');

        $('.side-menu').sidebar({
            dimPage: false,
            transition: 'overlay',
            mobileTransition: 'overlay',
        }).sidebar('toggle');
    });

    $('.ui.side-menu').accordion();

    categoryContent = [{
        "category": "Cake",
        "title": "Chocolate syrup cake"
    }, {
        "category": "Cake",
        "title": "Black forest"
    }, {
        "category": "Cake",
        "title": "Chocolate truffel"
    }, {
        "category": "Cake",
        "title": "Dutch chocolate"
    }, {
        "category": "Cake",
        "title": "Ganache"
    }, {
        "category": "Cake",
        "title": "Chocolate cheese cake"
    }, {
        "category": "Cake",
        "title": "Pineapple"
    }, {
        "category": "Cake",
        "title": "Butter scotch"
    }, {
        "category": "Cake",
        "title": "Strawberry"
    }, {
        "category": "Cake",
        "title": "Pinacolada(tender coconut)"
    }, {
        "category": "Cake",
        "title": "Rasmalai"
    }, {
        "category": "Cake",
        "title": "Kulfi falooda"
    }, {
        "category": "Cake",
        "title": "Blue berry"
    }, {
        "category": "Cake",
        "title": "Paan"
    }, {
        "category": "Cake",
        "title": "Mango"
    }, {
        "category": "Cake",
        "title": "Orange"
    }, {
        "category": "Cake",
        "title": "Paani puri"
    }, {
        "category": "Cake",
        "title": "Merry berry"
    }, {
        "category": "Cake",
        "title": "Gulab jamun"
    }, {
        "category": "Cake",
        "title": "Honey cake"
    }, {
        "category": "Cake",
        "title": "Zebra marvel"
    }, {
        "category": "Cake",
        "title": "Red velvet"
    }, {
        "category": "Cake",
        "title": "Tiger cream cake"
    }, {
        "category": "Cake",
        "title": "Date cake (speciality)"
    }, {
        "category": "Cake",
        "title": "Plum cake (speciality)"
    }, {
        "category": "Cake",
        "title": "Marble"
    }, {
        "category": "Cake",
        "title": "Wine cake"
    }, {
        "category": "Cake",
        "title": "Sponge"
    }, {
        "category": "Cake",
        "title": "Mix fruit cake"
    }, {
        "category": "Cake",
        "title": "Trooty frooty cake"
    }, {
        "category": "Cake",
        "title": "Christmas cake"
    }, {
        "category": "Cake",
        "title": "Carwheel cake"
    }, {
        "category": "Cake",
        "title": "Doll cake"
    }, {
        "category": "Cake",
        "title": "Marble"
    }, {
        "category": "Cake Sides",
        "title": "Cake pops"
    }, {
        "category": "Cake Sides",
        "title": "Cakesical"
    }, {
        "category": "Cake Sides",
        "title": "Brownie"
    }, {
        "category": "Cake Sides",
        "title": "Tea time cake"
    }, {
        "category": "Cake Sides",
        "title": "Trooty frooty bread"
    }, {
        "category": "Cake Sides",
        "title": "Plum cake"
    }, {
        "category": "Cake Sides",
        "title": "Muffins"
    }, {
        "category": "Cake Sides",
        "title": "Cup cakes"
    }, {
        "category": "Cake Sides",
        "title": "Bake donut"
    }, {
        "category": "Cake Sides",
        "title": "Fried donut"
    }, {
        "category": "Cake Sides",
        "title": "Cinnamon roll"
    }, {
        "category": "Cake Sides",
        "title": "Sweet bread"
    }, {
        "category": "Bakery",
        "title": "Bread"
    }, {
        "category": "Bakery",
        "title": "Ladi pav"
    }, {
        "category": "Bakery",
        "title": "Brown bread"
    }, {
        "category": "Bakery",
        "title": "Garlic bread"
    }, {
        "category": "Bakery",
        "title": "Braided bread"
    }, {
        "category": "Bakery",
        "title": "Pizza base"
    }, {
        "category": "Bakery",
        "title": "Whole wheat pizza base"
    }, {
        "category": "Bakery",
        "title": "Burger bun"
    }, {
        "category": "Bakery",
        "title": "Whole wheat burger bun"
    }, {
        "category": "Bakery",
        "title": "Stuffed garlic bread"
    }, {
        "category": "Bakery",
        "title": "Pizza"
    }, {
        "category": "Bakery",
        "title": "Vegiee chesse"
    }, {
        "category": "Bakery",
        "title": "Paneery cheese"
    }, {
        "category": "Bakery",
        "title": "Soya cheese"
    }, {
        "category": "Bakery",
        "title": "Foccasia"
    }, {
        "category": "Bakery",
        "title": "Stuffed braided bread"
    }]

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