$(".nav .ui.search").css('width', $(".nav").outerWidth() - $(".nav .logo").outerWidth() - $(".nav .hamburger-ico").outerWidth() - 80);

document.addEventListener('DOMContentLoaded', function () {

    function ScrollToElement(scrollTo, Speed = 0, AnimationType = 'easeInOutExpo', callback = null) {
        var scrolltoOffset = $('.nav').outerHeight();

        scrollTo = scrollTo.offset().top - scrolltoOffset;

        $('html, body').stop().animate({
            scrollTop: scrollTo
        }, Speed, AnimationType, callback);

    }


    homeSlider = new Splide('#home .splide', {
        type: 'loop',
        perPage: 1,
        height: '75vh',
        arrows: false,
        arrowsPath: false,
        pagination: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        keyboard: false,
        autoplay: true,
        interval: 3500,
        resetProgress: false
    });
    homeSlider.mount();

    var ParralaxImg = new simpleParallax(document.getElementsByClassName('bgParallax'), {
        scale: 1.4,
        delay: 0.6,
        // transition: 'cubic-bezier(0,0,0,1)',
    });



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
            $('.ui.side-menu').sidebar('toggle');
            e.preventDefault();
            ScrollToElement(target, 700, 'easeInOutExpo');
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
        type: 'loop',
    };

    var prd_carausel1 = new Splide('#prd-c1', carousel_settings);
    var prd_carausel2 = new Splide('#prd-c2', carousel_settings);
    var prd_carausel3 = new Splide('#prd-c3', carousel_settings);

    window.prd_carausel1 = prd_carausel1;

    prd_carausel1.mount();
    prd_carausel2.mount();
    prd_carausel3.mount();

    function slideToProduct(productElement, productCategoryElement) {

        var productSlideNumber = Number.parseInt(productElement.attr('slideNo')) - 1;
        var categoryName = productCategoryElement.attr('id');

        if (categoryName == "chocolate_base")
            splideObject = prd_carausel1;
        else if (categoryName == "vanilla_base")
            splideObject = prd_carausel2;
        else if (categoryName == "flavoured_specials")
            splideObject = prd_carausel3;


        splideObject.go(productSlideNumber);
    }



    if (location.hash) {
        navigationData = location.hash.substr(1);
        if (navigationData.substring(0, 7) == "Product") {
            viewType = navigationData[8];
            if (viewType == "E") {} else if (viewType == "I") {
                var productElement = $("#" + navigationData.substr(10));
                var productCategoryElement = $((productElement).closest('.product-carousel').attr('productCategory'));

                setTimeout(() => {
                    ScrollToElement(productCategoryElement, 200, 'easeInOutExpo', () => {
                        slideToProduct(productElement, productCategoryElement);
                    });
                }, 100);

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

    var categoryContent = [{
        "category": "Cake",
        "title": "Chocolate syrup cake",
        "id": "cak-cho-chocolate-syrup-cake"
    }, {
        "category": "Cake",
        "title": "Black forest cake",
        "id": "cak-cho-black-forest-cake"
    }, {
        "category": "Cake",
        "title": "Chocolate truffel cake",
        "id": "cak-cho-chocolate-truffel-cake"
    }, {
        "category": "Cake",
        "title": "Dutch chocolate cake",
        "id": "cak-cho-dutch-chocolate-cake"
    }, {
        "category": "Cake",
        "title": "Ganache cake",
        "id": "cak-cho-ganache-cake"
    }, {
        "category": "Cake",
        "title": "Chocolate cheese cake",
        "id": "cak-cho-chocolate-cheese-cake"
    }, {
        "category": "Cake",
        "title": "Pineapple cake",
        "id": "cak-van-pineapple-cake"
    }, {
        "category": "Cake",
        "title": "Butter scotch cake",
        "id": "cak-van-butter-scotch-cake"
    }, {
        "category": "Cake",
        "title": "Strawberry cake",
        "id": "cak-van-strawberry-cake"
    }, {
        "category": "Cake",
        "title": "Pinacolada(tender coconut) cake",
        "id": "cak-fla-pinacolada-cake"
    }, {
        "category": "Cake",
        "title": "Rasmalai cake",
        "id": "cak-fla-rasmalai-cake"
    }, {
        "category": "Cake",
        "title": "Kulfi falooda cake",
        "id": "cak-fla-kulfi-falooda-cake"
    }, {
        "category": "Cake",
        "title": "Blue berry cake",
        "id": "cak-fla-blue-berry-cake"
    }, {
        "category": "Cake",
        "title": "Paan cake",
        "id": "cak-fla-paan-cake"
    }, {
        "category": "Cake",
        "title": "Mango cake",
        "id": "cak-fla-mango-cake"
    }, {
        "category": "Cake",
        "title": "Orange cake",
        "id": "cak-fla-orange-cake"
    }, {
        "category": "Cake",
        "title": "Paani puri cake",
        "id": "cak-fla-paani-puri-cake"
    }, {
        "category": "Cake",
        "title": "Merry berry cake",
        "id": "cak-fla-merry-berry-cake"
    }, {
        "category": "Cake",
        "title": "Gulab jamun cake",
        "id": "cak-fla-gulab-jamun-cake"
    }, {
        "category": "Cake",
        "title": "Honey cake cake",
        "id": "cak-fla-honey-cake-cake"
    }, {
        "category": "Cake",
        "title": "Zebra marvel cake",
        "id": "cak-fla-zebra-marvel-cake"
    }, {
        "category": "Cake",
        "title": "Red velvet cake",
        "id": "cak-fla-red-velvet-cake"
    }, {
        "category": "Cake",
        "title": "Tiger cream cake",
        "id": "cak-fla-tiger-cream-cake"
    }, {
        "category": "Cake",
        "title": "Date cake (speciality)",
        "id": "cak-fla-date-cake"
    }, {
        "category": "Cake",
        "title": "Plum cake (speciality)",
        "id": "cak-fla-plum-cake"
    }, {
        "category": "Cake",
        "title": "Marble cake",
        "id": "cak-fla-marble-cake"
    }, {
        "category": "Cake",
        "title": "Wine cake",
        "id": "cak-fla-wine-cake"
    }, {
        "category": "Cake",
        "title": "Sponge cake",
        "id": "cak-fla-sponge-cake"
    }, {
        "category": "Cake",
        "title": "Mix fruit cake",
        "id": "cak-fla-mix-fruit-cake"
    }, {
        "category": "Cake",
        "title": "Trooty frooty cake",
        "id": "cak-fla-trooty-frooty-cake"
    }, {
        "category": "Cake",
        "title": "Christmas cake",
        "id": "cak-des-christmas-cake"
    }, {
        "category": "Cake",
        "title": "Carwheel cake",
        "id": "cak-des-carwheel-cake"
    }, {
        "category": "Cake",
        "title": "Doll cake",
        "id": "cak-des-doll-cake"
    }, {
        "category": "Cake",
        "title": "Marble cake",
        "id": "cak-des-marble-cake"
    }, {
        "category": "Cake Sides",
        "title": "Cake pops",
        "id": "cak-des-cake-pops"
    }, {
        "category": "Cake Sides",
        "title": "Cakesical",
        "id": "cak-des-cakesical"
    }, {
        "category": "Cake Sides",
        "title": "Brownie",
        "id": "cak-des-brownie"
    }, {
        "category": "Cake Sides",
        "title": "Tea time cake",
        "id": "cak-des-tea-time-cake"
    }, {
        "category": "Cake Sides",
        "title": "Trooty frooty bread",
        "id": "cak-des-trooty-frooty-bread"
    }, {
        "category": "Cake Sides",
        "title": "Plum cake",
        "id": "cak-des-plum-cake"
    }, {
        "category": "Cake Sides",
        "title": "Muffins",
        "id": "cak-des-muffins"
    }, {
        "category": "Cake Sides",
        "title": "Cup cakes",
        "id": "cak-des-cup-cakes"
    }, {
        "category": "Cake Sides",
        "title": "Bake donut",
        "id": "cak-des-bake-donut"
    }, {
        "category": "Cake Sides",
        "title": "Fried donut",
        "id": "cak-des-fried-donut"
    }, {
        "category": "Cake Sides",
        "title": "Cinnamon roll",
        "id": "cak-des-cinnamon-roll"
    }, {
        "category": "Cake Sides",
        "title": "Sweet bread",
        "id": "cak-des-sweet-bread"
    }, {
        "category": "Bakery",
        "title": "Bread",
        "id": "bak-bre-bread"
    }, {
        "category": "Bakery",
        "title": "Ladi pav",
        "id": "bak-bre-ladi-pav"
    }, {
        "category": "Bakery",
        "title": "Brown bread",
        "id": "bak-bre-brown-bread"
    }, {
        "category": "Bakery",
        "title": "Garlic bread",
        "id": "bak-bre-garlic-bread"
    }, {
        "category": "Bakery",
        "title": "Braided bread",
        "id": "bak-bre-braided-bread"
    }, {
        "category": "Bakery",
        "title": "Pizza base",
        "id": "bak-bre-pizza-base"
    }, {
        "category": "Bakery",
        "title": "Whole wheat pizza base",
        "id": "bak-bre-whole-wheat-pizza-base"
    }, {
        "category": "Bakery",
        "title": "Burger bun",
        "id": "bak-bre-burger-bun"
    }, {
        "category": "Bakery",
        "title": "Whole wheat burger bun",
        "id": "bak-bre-whole-wheat-burger-bun"
    }, {
        "category": "Bakery",
        "title": "Stuffed garlic bread",
        "id": "bak-sna-stuffed-garlic-bread"
    }, {
        "category": "Bakery",
        "title": "Pizza",
        "id": "bak-sna-pizza"
    }, {
        "category": "Bakery",
        "title": "Vegiee chesse",
        "id": "bak-sna-vegiee-chesse"
    }, {
        "category": "Bakery",
        "title": "Paneery cheese",
        "id": "bak-sna-paneery-cheese"
    }, {
        "category": "Bakery",
        "title": "Soya cheese",
        "id": "bak-sna-soya-cheese"
    }, {
        "category": "Bakery",
        "title": "Foccasia",
        "id": "bak-sna-foccasia"
    }, {
        "category": "Bakery",
        "title": "Stuffed braided bread",
        "id": "bak-sna-stuffed-braided-bread"
    }];


    function gtps(result) { //gtps means go to specified product's section on search and show it/focus it
        try {
            
            var productElement = $("#" + result.id);
            var productCategoryElement = $((productElement).closest('.product-carousel').attr('productCategory'));

            ScrollToElement(productCategoryElement, 200, 'easeInOutExpo', () => {

                slideToProduct(productElement, productCategoryElement);

            });
        }catch (error) {alert("Product Not Listed/Displayed Yet!\nListed Products Till Now are Cakes");}

    }

    $('.nav .ui.search').search({
        type: 'category',
        source: categoryContent,
        searchFields: [
            'title',
            'category'
        ],
        onSelect: gtps
    });


    $("#side-nav-bar a.productMenuNav").click(function (e) {
        e.preventDefault();
        $('.ui.side-menu').sidebar('toggle');

        try {
        var productElement = $($(this).attr('productID'));
        var productCategoryElement = $((productElement).closest('.product-carousel').attr('productCategory'));

        ScrollToElement(productCategoryElement, 200, 'easeInOutExpo', () => {

            slideToProduct(productElement, productCategoryElement);

        });
        } catch (error) {alert("Product Not Listed/Displayed Yet!\nListed Products Till Now are Cakes");}
        
    });















});

function getCartData() {




    return true;
}