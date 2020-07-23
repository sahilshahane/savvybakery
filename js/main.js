$(".nav .ui.search").css('width', $(".nav").outerWidth() - $(".nav .logo").outerWidth() - $(".nav .hamburger-ico").outerWidth()-30);

$(document).ready(function() {

    //HOME SCREEN CAROUSAL ANIMATION
    document.querySelector('#home .inner .wu').addEventListener('animationend', function(e) {
        $(this).stop().animate({ letterSpacing: '0px' }, 300, 'easeInOutExpo', function() {
            setTimeout(() => { $(this).css('letter-spacing', '50px') }, 6000)
        });
    });

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



    $(".nav").sticky({ topSpacing: 0, zIndex: 9999999 });



    var HomeScrollobserver1 = new IntersectionObserver(function(entries) {
        if (entries[0]['isIntersecting'] === true) {
            if (entries[0]['intersectionRatio'] < 0.99)

            if (entries[0]['intersectionRatio'] > 0.8) {

                $('.nav .home').css('border-bottom',"2px solid tomato");

            }
            else if(entries[0]['intersectionRatio'] < 0.6){
                $('.nav .home').css('border',"none");
            }
        }
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.99, 1] }).observe(document.querySelector("#home"));

    var MenuScrollobserver2 = new IntersectionObserver(function(entries) {
        if (entries[0]['isIntersecting'] === true) {


            if (entries[0]['intersectionRatio'] > 0.2) {

            }
        }
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 1] }).observe(document.querySelector("#menu"));

    var ContactScrollobserver1 = new IntersectionObserver(function(entries) {
        if (entries[0]['isIntersecting'] === true) {
            if (entries[0]['intersectionRatio'] > 0.4) {


            }
        }
    }, { threshold: [0.5, 0.7, 1] }).observe(document.querySelector("#contact"));


    var AboutUsScrollobserver3 = new IntersectionObserver(function(entries) {
        // since there is a single target to be observed, there will be only one entry
        if (entries[0]['isIntersecting'] === true) {
            if (entries[0]['intersectionRatio'] > 0.4) {


            }

        }
    }, { threshold: [0.5, 0.7, 1] }).observe(document.querySelector("#aboutus"));

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


    $('.review-slider').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 5000,
        pauseAutoPlayOnHover: false,
        friction: 0.3
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

    $('#autocomplete').autocomplete({
        lookup: AUTOCOMPLETE_DATA,
        onSelect: function(suggestion) {
            //  alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
        },
        groupBy: 'sub_category',
        minChars: 3,
        appendTo: ".nav #SearchSuggestions",
        showNoSuggestionNotice: true
    });

    $('.product-carousel').flickity({
        // options
        cellAlign: 'center',
        contain: true,
        prevNextButtons: true,
        pageDots: false,
        // lazyLoad: 1,
        // hash: true,
        friction: 0.3,
        lazyLoad: 5
    });

    // $('#menu .product .inner').hover(function () {
    //         $(this).children(".prd-img").addClass('prd-imgbrightness');
    //         $(this).children(".img-description").show();

    //     }, function () {
    //         $(this).children(".prd-img").removeClass('prd-imgbrightness');
    //         $(this).children(".img-description").hide();
    //     }
    // );
    
    $("#menu .product .prd-weight div").click(function(){
        $(this).parent().children(".selected").removeClass("selected")
        $(this).addClass("selected");
    });

    

    $('.addToCart').change(function() {
        if(this.checked) {
            $(this).parent().children(".cart-ico").stop().fadeOut(()=>{$(this).parent().children(".tick-trigger").children(".trigger").toggleClass("drawn");});
        }
        else{
            $(this).parent().children(".tick-trigger").children(".trigger").toggleClass("drawn");

            $(this).parent().children(".cart-ico").stop().fadeIn();

        }
    });

   $('#hamburger').click(function(e){
    $(".hamburger-menu").focusin();
   });

   $(".hamburger-menu .back").click(function(){

       var active_elem = $(".hamburger-menu .active");

       if(active_elem.attr('data-nav-from')=="exit"){
        $(".hamburger-menu").css('transform',"translate(100%)");
        $('#hamburger').stop().animate({opacity: 1},100);
        $(".hamburger-menu").focusout();
       }
       else{
        var go_back_to = $('#'+active_elem.attr('data-nav-from'));
        
        sidenav(active_elem,go_back_to,true);
       }
   });

   $(document).mouseup(function (e) { 
    if ($(e.target).closest(".hamburger-menu").length === 0)$(".hamburger-menu").focusout();else $(".hamburger-menu").focusin();
    }); 

$(".hamburger-menu").focusin(function(){
    $(this).css('transform',"translate(0%)");
    $('.nav .hamburger-ico').stop().animate({opacity: 0},200);
});

$(".hamburger-menu").focusout(function(){
    $('.nav #hamburger').removeClass('is-active');
    $(this).css('transform',"translate(100%)");
    $('.nav .hamburger-ico').stop().animate({opacity: 1},100);
});


$(".hamburger-menu .nav-true").click(function(e){
    var from_element = $(this);
    var to_element = $('#'+$(this).attr('data-nav-to'));

    sidenav(from_element,to_element);
});

function sidenav(from_element,to_element,back_nav=false,animation_time=100){
    var display_area = $('.hamburger-menu .item-view');
    var parent_element = from_element.parent();
    var menu = $('.hamburger-menu');
    var bW = menu.width();

    if(back_nav){
        // from_element.removeClass("active");
        // to_element.addClass("active");
        // var aW = menu.width();
        // to_element.removeClass("active");
        // menu.width(bW);
        // menu.animate({
        //     width:aW,
        // },40,'easeInOutExpo',function(){
        //     to_element.addClass("active");
        //     menu.css("width",'auto');
        // });
        from_element.removeClass("active");
        to_element.addClass("active");
}
    else{
        // parent_element.removeClass("active");
        // to_element.addClass("active");
        // var aW = menu.width();
        // to_element.removeClass("active");
        // menu.width(bW);
        // menu.animate({
        //     width:aW,
        // },100,'easeInOutExpo',function(){
        //     to_element.addClass("active");
        //     menu.css("width",'auto');
        // });

        parent_element.removeClass("active");
        to_element.addClass("active");

    }

}


$('.nav .hamburger-ico').click(function(){
    $(this).addClass('is-active');

    $('.side-menu').sidebar({
        dimPage:false,
        transition:'overlay',
        mobileTransition:'overlay',
    }).sidebar('toggle');
});

$('.ui.side-menu').accordion();



categoryContent=[{"category":"Cake","title":"Chocolate syrup cake"},{"category":"Cake","title":"Black forest"},{"category":"Cake","title":"Chocolate truffel"},{"category":"Cake","title":"Dutch chocolate"},{"category":"Cake","title":"Ganache"},{"category":"Cake","title":"Chocolate cheese cake"},{"category":"Cake","title":"Pineapple"},{"category":"Cake","title":"Butter scotch"},{"category":"Cake","title":"Strawberry"},{"category":"Cake","title":"Pinacolada(tender coconut)"},{"category":"Cake","title":"Rasmalai"},{"category":"Cake","title":"Kulfi falooda"},{"category":"Cake","title":"Blue berry"},{"category":"Cake","title":"Paan"},{"category":"Cake","title":"Mango"},{"category":"Cake","title":"Orange"},{"category":"Cake","title":"Paani puri"},{"category":"Cake","title":"Merry berry"},{"category":"Cake","title":"Gulab jamun"},{"category":"Cake","title":"Honey cake"},{"category":"Cake","title":"Zebra marvel"},{"category":"Cake","title":"Red velvet"},{"category":"Cake","title":"Tiger cream cake"},{"category":"Cake","title":"Date cake (speciality)"},{"category":"Cake","title":"Plum cake (speciality)"},{"category":"Cake","title":"Marble"},{"category":"Cake","title":"Wine cake"},{"category":"Cake","title":"Sponge"},{"category":"Cake","title":"Mix fruit cake"},{"category":"Cake","title":"Trooty frooty cake"},{"category":"Cake","title":"Christmas cake"},{"category":"Cake","title":"Carwheel cake"},{"category":"Cake","title":"Doll cake"},{"category":"Cake","title":"Marble"},{"category":"Cake Sides","title":"Cake pops"},{"category":"Cake Sides","title":"Cakesical"},{"category":"Cake Sides","title":"Brownie"},{"category":"Cake Sides","title":"Tea time cake"},{"category":"Cake Sides","title":"Trooty frooty bread"},{"category":"Cake Sides","title":"Plum cake"},{"category":"Cake Sides","title":"Muffins"},{"category":"Cake Sides","title":"Cup cakes"},{"category":"Cake Sides","title":"Bake donut"},{"category":"Cake Sides","title":"Fried donut"},{"category":"Cake Sides","title":"Cinnamon roll"},{"category":"Cake Sides","title":"Sweet bread"},{"category":"Bakery","title":"Bread"},{"category":"Bakery","title":"Ladi pav"},{"category":"Bakery","title":"Brown bread"},{"category":"Bakery","title":"Garlic bread"},{"category":"Bakery","title":"Braided bread"},{"category":"Bakery","title":"Pizza base"},{"category":"Bakery","title":"Whole wheat pizza base"},{"category":"Bakery","title":"Burger bun"},{"category":"Bakery","title":"Whole wheat burger bun"},{"category":"Bakery","title":"Stuffed garlic bread"},{"category":"Bakery","title":"Pizza"},{"category":"Bakery","title":"Vegiee chesse"},{"category":"Bakery","title":"Paneery cheese"},{"category":"Bakery","title":"Soya cheese"},{"category":"Bakery","title":"Foccasia"},{"category":"Bakery","title":"Stuffed braided bread"}]

$('.nav .ui.search')
  .search({
    type: 'category',
    source: categoryContent,
    searchFields   : [
        'title',
        'category'
      ]
  })
;
























});

function getCartData() {




    return true;
}
