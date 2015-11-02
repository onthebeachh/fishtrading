$(function() {

    $('#mc-form').ajaxChimp({
        language: 'cm',
        url: 'http://csmthemes.us3.list-manage.com/subscribe/post?u=9666c25a337f497687875a388&id=5b881a50fb'
    });


    $.ajaxChimp.translations.cm = {
        'submit': 'Submitting...',
        0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
        1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
        2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
        3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
        4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
        5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
    };


    /* ==========================================================================
   Tweet
   ========================================================================== */


    $('.tweet').twittie({
        username: 'envatomarket', // change username here
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}} {{user_name}}',
        count: 10
    }, function() {
        var item = $('.tweet ul');

        item.children('li').first().show().siblings().hide();
        setInterval(function() {
            item.find('li:visible').fadeOut(500, function() {
                $(this).appendTo(item);
                item.children('li').first().fadeIn(500);
            });
        }, 5000);
    });


    /* ==========================================================================
   sticky nav
   ========================================================================== */

    $('.navbar-default').waypoint('sticky', {
        offset: 30
    });


    /* ==========================================================================
   Feature image absolute position height fix
   ========================================================================== */

    $(window).load(function() {
        var featureImg = function() {
            $(".features div[class='row'] .col-md-7").each(function() {
                var newHeight = 0,
                    $this = $(this);
                $.each($this.children(), function() {
                    newHeight += $(this).height();
                });
                $this.height(newHeight);
            });
        };
        featureImg();
        $(window).on("resize", function() {
            featureImg();
        });
    });

    /* ==========================================================================
   Smooth scroll
   ========================================================================== */

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({

                    scrollTop: (target.offset().top - 40)
                }, 1000);
                return false;
            }
        }
    });




});