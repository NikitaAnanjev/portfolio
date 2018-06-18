// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

jQuery(document).ready(function ($) {
    $("#fullpage").fullpage({
        sectionsColor: ['#c63d0f', 'orange', '#49819c', '#fec401', '#ff9135'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
        menu: '#menu',
        scrollBar: false,
        // scrollOverflow:true,
        navigation: false,
        navigationPosition: 'top',
        slidesNavigation: true,
        navigationTooltips: ['Welcome', 'Me', 'Stuff', 'Message'],
        loopTop: false,
        loopBottom: false,
        loopHorizontal: true,


        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,

        easing: 'easeInOutCubic',
        easingcss3: 'ease',

        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,

        paddingTop: '100px',
        // paddingBottom: '10px',
        // fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        //onLeave: function(index, nextIndex, direction){},
        //afterLoad: function(anchorLink, index){},
        // afterRender: function(){},
        //  afterResize: function(){},
        //  afterResponsive: function(isResponsive){},
        //  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        //  onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}

        //afterLoad
        //afterSlideLoad
        //onSlideLeave
        //afterRender
        //afterResize


        /* alert(anchorLink + '>' + index + '>' + slideAnchor + '>' + slideIndex);*/

        // if (slideIndex == 1) { alert(anchorLink + '////' + index + '>' + slideAnchor + '>' + slideIndex)
        // for (i = 1; i < 10; i++) {
        //        if (slideIndex == i) {
        //
        //         $("#sld"+i).fadeIn(100, function () {
        //
        //
        //                 $("#sld" + i).css({'opacity': '1'}).animate({'right': '0%'}, 800)
        //
        //
        //                }
        //             )
        //         }
        //     // alert($sinc);
        //            }


        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {

            if (slideIndex == 0) {
                $("#sld1").fadeIn(100, function () {
                    $("#sld1").css({'opacity': '1'}).animate({'right': '0%'}, 800)
                    // });
                    $("#sld2").fadeIn(100, function () {
                        $("#sld2").css({'opacity': '1'}).animate({'left': '0%'}, 500)
                        // $("#section1 h1").fadeIn(300, function ()
                        //     $("#section1 p").fadeIn(300);
                    });
                });
            }
            else if (slideIndex == 1) {
                $("#sld3").fadeIn(100, function () {
                    $("#sld3").css({'opacity': '1'}).animate({'right': '0%'}, 800)
                    // });
                    $("#sld4").fadeIn(100, function () {
                        $("#sld4").css({'opacity': '1'}).animate({'left': '0%'}, 500)
                        // $("#section1 h1").fadeIn(300, function () {
                        //     $("#section1 p").fadeIn(300);
                    });
                });
            }
            else if (slideIndex == 2) {
                $("#sld5").fadeIn(100, function () {
                    $("#sld5").css({'opacity': '1'}).animate({'right': '0%'}, 800)
                    // });
                    $("#sld6").fadeIn(100, function () {
                        $("#sld6").css({'opacity': '1'}).animate({'left': '0%'}, 500)
                        // $("#section1 h1").fadeIn(300, function () {
                        //     $("#section1 p").fadeIn(300);
                    });
                });
            }
            else if (slideIndex == 3) {
                $("#sld7").fadeIn(100, function () {
                    $("#sld7").css({'opacity': '1'}).animate({'right': '0%'}, 800)
                    // });
                    $("#sld8").fadeIn(100, function () {
                        $("#sld8").css({'opacity': '1'}).animate({'left': '0%'}, 500)
                        // $("#section1 h1").fadeIn(300, function () {
                        //     $("#section1 p").fadeIn(300);
                    });
                });
            }
            else if (slideIndex == 4) {
                $("#sld9").fadeIn(100, function () {
                    $("#sld9").css({'opacity': '1'}).animate({'right': '0%'}, 800)
                    // });
                    $("#sld10").fadeIn(100, function () {
                        $("#sld10").css({'opacity': '1'}).animate({'left': '0%'}, 500)
                        // $("#section1 h1").fadeIn(300, function () {
                        //     $("#section1 p").fadeIn(300);
                    });
                });
            }
            else if (slideIndex == 5) {
                $("#sld11").fadeIn(100, function () {
                    $("#sld11").css({'opacity': '1'}).animate({'right': '0%'}, 800)
                    // });
                    $("#sld12").fadeIn(100, function () {
                        $("#sld12").css({'opacity': '1'}).animate({'left': '0%'}, 500)
                        // $("#section1 h1").fadeIn(300, function () {
                        //     $("#section1 p").fadeIn(300);
                    });
                });
            }

        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            // alert(anchorLink + '>' + slideIndex + '>' + direction + '>' + nextSlideIndex);

            if (slideIndex == 0) {

                $("#sld1").fadeOut(100, function () {
                    $("#sld1").delay(100).animate({'right': '200%'}, 200);
                });


                $("#sld2").fadeOut(100, function () {
                    $("#sld2").delay(100).css({'opacity': '0'}).animate({'left': '200%'}, 200);
                });
            }
            else if (slideIndex == 1) {

                $("#sld3").fadeOut(100, function () {
                    $("#sld3").delay(100).animate({'right': '200%'}, 200);
                });


                $("#sld4").fadeOut(100, function () {
                    $("#sld4").delay(100).css({'opacity': '0'}).animate({'left': '200%'}, 200);
                });
            }
            else if (slideIndex == 2) {

                $("#sld5").fadeOut(100, function () {
                    $("#sld5").delay(100).animate({'right': '200%'}, 200);
                });


                $("#sld6").fadeOut(100, function () {
                    $("#sld6").delay(100).css({'opacity': '0'}).animate({'left': '200%'}, 200);
                });
            }
            else if (slideIndex == 3) {

                $("#sld7").fadeOut(100, function () {
                    $("#sld7").delay(100).animate({'right': '200%'}, 200);
                });


                $("#sld8").fadeOut(100, function () {
                    $("#sld8").delay(100).css({'opacity': '0'}).animate({'left': '200%'}, 200);
                });
            }
            else if (slideIndex == 4) {

                $("#sld9").fadeOut(100, function () {
                    $("#sld9").delay(100).animate({'right': '200%'}, 200);
                });


                $("#sld10").fadeOut(100, function () {
                    $("#sld10").delay(100).css({'opacity': '0'}).animate({'left': '200%'}, 200);
                });
            } else if (slideIndex == 5) {

                $("#sld11").fadeOut(100, function () {
                    $("#sld11").delay(100).animate({'right': '200%'}, 200);
                });


                $("#sld12").fadeOut(100, function () {
                    $("#sld12").delay(100).css({'opacity': '0'}).animate({'left': '200%'}, 200);
                });
            }


        },
        // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        //
        //
        //     if (link = '3rdPage'){
        //     $("#section1 h3").fadeIn(100, function () {
        //         $("#section1 h3").css({'opacity': '1'}).animate({'right': '0%'}, 800)
        //     });
        // }},
        afterLoad: function (link, index) {


            if (index > 0) {
                document.getElementById('myVideo').play();


            }


            if (link == 'secondPage') {


                $("#txt2 h1").fadeIn(300, function () {
                    $("#txt2 p").fadeIn(300);
                });


                $("#section1 h3").fadeIn(100, function () {
                    $("#section1 h3").css({'opacity': '1'}).animate({'right': '0%'}, 600)
                });
                $("#section1 h5").fadeIn(100, function () {
                    $("#section1 h5").css({'opacity': '1'}).animate({'left': '0%'}, 300)

                    // $("#section1 h1").fadeIn(300, function () {
                    //     $("#section1 p").fadeIn(300);
                    // });
                });
            }
            if (link == '3rdPage') {


                $("#txt3 h1").fadeIn(300, function () {
                    $("#txt3 p").fadeIn(300);
                    $("#txt3 img").fadeIn(1000);
                });


                $("#section2 h3").fadeIn(100, function () {
                    $("#section2 h3").css({'opacity': '1'}).animate({'right': '0%'}, 600)
                });
                $("#section2 h5").fadeIn(100, function () {
                    $("#section2 h5").css({'opacity': '1'}).animate({'left': '0%'}, 300)

                    // $("#section1 h1").fadeIn(300, function () {
                    //     $("#section1 p").fadeIn(300);
                    // });
                });
            }
            if (link == '4thPage') {
                $("#section3 h3").fadeIn(100, function () {
                    $("#section3  h3").css({'opacity': '1'}).animate({'right': '0%'}, 800)
                });
                $("#section3  h5").fadeIn(100, function () {
                    $("#section3 h5").css({'opacity': '1'}).animate({'left': '0%'}, 500);
                    $("#wow h1").fadeIn(300, function () {
                        $("#wow p").fadeIn(300);
                    });
                });

            }   // if (index == 3) {
            //     $("#section3 h3").fadeIn(300, function () {
            //         $("#section3 h3").delay(300).css({'opacity': '1'}).animate({'right': '0%'}, 700);
            //     });
            //     $("#section3 h1").fadeIn(300, function () {
            //         $("#section3 p").fadeIn(300);
            //     });
            //     $("#section3 h1,#section3 p").fadeIn(100, function () {
            //         $("#section3 h1").delay(600).animate({'fontsize': '2em'}, 500);
            //
            //     });
            // }


            // else { alert(link + '>' + index); }

        },

        onLeave: function (link, index) {
            // alert(link + '< >' + index);
            if (link == 2) {
                $("#section1 h1").fadeOut(100, function () {

                    $("#section1 p").fadeOut(100);
                })
            }
            if (index == 3) {
                $("#txt3 h1").fadeOut(100, function () {

                    $("#txt3 p").fadeOut(100);
                    $("#txt3 img").fadeOut(100);
                })


            }
            if (link == 4) {
           //  alert(link + '>' + index);

                $("#wow h1").fadeOut(100, function () {

                    $("#wow p").fadeOut(100);})


            }

        }
    });
})



    


