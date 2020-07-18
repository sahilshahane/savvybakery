$(".nav .SearchBar").css('width', $(".nav").outerWidth() - $(".nav .logo").outerWidth() - $("#nav-items").outerWidth()-30);

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

    // $('.hamburger-menu .menu').click(function() {
    //     $('a.linkNav')[1].click();
    // });

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
                // $("#navlogo").stop().animate({ width: 50 }, 200, 'linear')

            if (entries[0]['intersectionRatio'] > 0.8) {
                // $("#navlogo").stop().animate({ width: 70 }, 200, 'linear')

                // var width = $(".nav .home").outerWidth();
                // $('#nav-line').css('width', width);
                // $("#nav-line").css('margin-left', '0');
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
                // var width = $(".nav .menu").outerWidth();
                // $('#nav-line').css('width', width);

                // $("#nav-line").css('margin-left', Ans[0]);

            }
        }
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 1] }).observe(document.querySelector("#menu"));

    // var ReviewScrollobserver1 = new IntersectionObserver(function(entries) {
    //     if (entries[0]['isIntersecting'] === true) {

    //         if (entries[0]['intersectionRatio'] > 0.6) {
    //             var width = $(".nav .reviews").outerWidth();
    //             $('#nav-line').css('width', width);

    //             $("#nav-line").css('margin-left', Ans[1]);
    //         }
    //     }
    // }, { threshold: [0.5, 0.7, 1] }).observe(document.querySelector("#review"));

    var ContactScrollobserver1 = new IntersectionObserver(function(entries) {
        if (entries[0]['isIntersecting'] === true) {
            if (entries[0]['intersectionRatio'] > 0.4) {

                var width = $(".nav .contact").outerWidth();
                $('#nav-line').css('width', width);


                $("#nav-line").css('margin-left', Ans[1] - 2);
            }
        }
    }, { threshold: [0.5, 0.7, 1] }).observe(document.querySelector("#contact"));


    var AboutUsScrollobserver3 = new IntersectionObserver(function(entries) {
        // since there is a single target to be observed, there will be only one entry
        if (entries[0]['isIntersecting'] === true) {
            if (entries[0]['intersectionRatio'] > 0.4) {

                var width = $(".nav .aboutus").outerWidth();
                $('#nav-line').css('width', width);

                $("#nav-line").css('margin-left', Ans[2] - 3);
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
        pageDots: true,
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
    $('#hamburger').stop().animate({opacity: 0},100);
});

$(".hamburger-menu").focusout(function(){
    $(this).css('transform',"translate(100%)");
    $('#hamburger').stop().animate({opacity: 1},100);
});


$(".hamburger-menu .nav-true").click(function(e){
    var from_element = $(this);
    var to_element = $('#'+$(this).attr('data-nav-to'));

    sidenav(from_element,to_element);
});


function sidenav(from_element,to_element,back_nav=false,animation_time=100){
    var display_area = $('.hamburger-menu .item-view');
    var parent_element = from_element.parent();

    if(back_nav){
    display_area.stop().animate({opacity: 0},animation_time,function(){

        from_element.removeClass("active");
        to_element.addClass("active");
        display_area.css('opacity',1);

    });}
    else{
        parent_element.removeClass("active");
        to_element.addClass("active");
        display_area.css('opacity',1);
    }

}





























});

function getCartData() {




    return true;
}
