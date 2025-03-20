// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
   // $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

    // Contact Form 	

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.slider-nav button');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    navButtons[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].classList.add('active');
    navButtons[currentSlide].classList.add('active');
}

// Auto-advance slides
setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);
}, 5000);

document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });
});

const projectData = {
'estbdal': {
title: 'Estbdal<br />Energy Efficiency Initiative',
description: 'A national initiative aimed at stimulating the replacement of old window air conditioners with new ones that are more efficient in consumption. Implemented under the Saudi Center for Energy Efficiency.',
image: 'imgs/projects/Seec.png',
url: 'https://estbdal.seec.gov.sa/#/'
},
'visionAnywhere': {
title: 'Vision Anywhere<br />Healthcare Application',
description: 'Vision Anywhere is an internet-first secure app that provides 24/7 real-time access to patient records. Designed to support today\'s modern GP with remote care delivery and collaborative working across shared care settings.',
image: 'imgs/projects/vision.png',
url: 'https://www.cegedim-healthcare.co.uk/vision-anywhere'
},
'visionTasks': {
title: 'Vision Tasks<br />Healthcare Collaboration Tool',
description: 'Vision Tasks is a secure collaboration tool for use within a single practice or across multiple organizations. Providing links back to the patient record, conversations, attachments, and full traceability of assigned tasks with one to-do list for each user.',
image: 'imgs/projects/tasks.png',
url: 'https://www.cegedim-healthcare.co.uk/tasks'
},
'ers': {
title: 'ERS Portal<br />ICT Equipment Licensing',
description: 'ICT Equipment Licensing Portal offers services of licenses and equipment approval of ICT devices, provided by the Communications, Space & Technology Commission (CTS).',
image: 'imgs/projects/ers.png',
url: 'https://ers.cst.gov.sa/arabic/pages/home.aspx'
},
'lcci': {
title: 'LCCI<br />London Chamber of Commerce',
description: 'LCCI (London Chamber of Commerce) Kentico portal is London\'s key hub for the business community, supports members\' businesses through a range of services.',
image: 'imgs/projects/lcci.png',
url: 'https://www.londonchamber.co.uk/'
},
'havwoods': {
title: 'Havwoods<br />Timber Flooring Specialist',
description: 'Kentico portal for Havwoods, a leading global specialist in the timber flooring industry.',
image: 'imgs/projects/Havwoods.png',
url: 'https://www.havwoods.com/uk/'
},
'etizaz': {
title: 'Etizaz (MOD)<br />Web & Mobile Application',
description: 'A comprehensive platform for the Ministry of Defense that manages military personnel promotions, transfers, and administrative processes. The system includes both web and mobile applications to facilitate easy access and management.',
image: 'imgs/portfolio/01.jpg'
},
'feker': {
title: 'Feker (MOD)<br />Knowledge Management Portal',
description: 'A Kentico-based knowledge management portal for the Ministry of Defense that serves as a central repository for military research, documents, and educational resources. Features include advanced search capabilities, document management, and user access controls.',
image: 'imgs/portfolio/01.jpg'
}
};



function openProjectModal(projectId) {
const project = projectData[projectId];
if (project) {
$('#modal-title').html(project.title);
$('#modal-description').text(project.description);
$('#modal-image').attr('src', project.image);
$('#modal-image').attr('alt', project.title.split('<br />')[0] + ' Project');

// Add URL button if URL exists
if (project.url) {
    $('#modal-url').attr('href', project.url).show();
} else {
    $('#modal-url').hide();
}

$('#animatedModal').fadeIn(300);
$('body').addClass('modal-open');
}
}

// Add click event for closing modal
$(document).ready(function() {
// Close on X button click
$('.close-popup-modal').click(function() {
$('#animatedModal').fadeOut(300);
$('body').removeClass('modal-open');
});

// Close on clicking outside the modal
$(document).on('click', '#animatedModal', function(e) {
if ($(e.target).is('#animatedModal')) {
    $('#animatedModal').fadeOut(300);
    $('body').removeClass('modal-open');
}
});

// Close on ESC key
$(document).keydown(function(e) {
if (e.keyCode === 27) { // ESC key
    $('#animatedModal').fadeOut(300);
    $('body').removeClass('modal-open');
}
});
});


