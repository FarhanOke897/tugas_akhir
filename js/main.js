// js/main.js (Versi Final Gabungan)

// Menunggu seluruh halaman HTML siap, baru jalankan semua JavaScript
document.addEventListener("DOMContentLoaded", function() {

    // ===== Bagian 1: Memasukkan Navbar dan Footer dari components.js =====
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (navbarPlaceholder && typeof navbarHTML !== 'undefined') {
        navbarPlaceholder.innerHTML = navbarHTML;
    }
    if (footerPlaceholder && typeof footerHTML !== 'undefined') {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // ===== Bagian 2: Mengatur Link Navigasi yang Aktif =====
    const setActiveNavLink = () => {
        // Cek dulu apakah navbar sudah ada
        if (!document.querySelector('#navbarCollapse')) return;

        let currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll('#navbarCollapse .nav-item .nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    };
    setActiveNavLink();


    // ===== Bagian 3: Menjalankan semua script asli dari template =====
    // Script ini menggunakan jQuery ($), jadi kita pastikan jQuery sudah dimuat
    (function ($) {
        "use strict";

        // Spinner
        var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 500); // Diberi sedikit jeda agar lebih mulus
        };
        spinner();
        
        // Initiate the wowjs
        new WOW().init();

        // Header carousel
        $(".header-carousel").owlCarousel({
            animateOut: 'fadeOut',
            items: 1,
            margin: 0,
            stagePadding: 0,
            autoplay: true,
            smartSpeed: 1000,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
        });

        // Blog carousel
        $(".blog-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            dots: true,
            loop: true,
            margin: 25,
            nav : false,
            responsiveClass: true,
            responsive: {
                0:{ items:1 },
                768:{ items:2 },
                1200:{ items:3 }
            }
        });

        // Testimonial carousel
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            autoplay: true,
            smartSpeed: 1000,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
        });

        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });

    })(jQuery);
});