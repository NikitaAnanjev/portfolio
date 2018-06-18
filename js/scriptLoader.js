jQuery(window).load(function () {
    //Preloader
    setTimeout("jQuery('.loader').animate({'opacity' : '0'},300,function(){jQuery('.loader').hide()})", 1500);
    setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)", 1800);

});
