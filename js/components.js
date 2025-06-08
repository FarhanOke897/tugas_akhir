
const navbarHTML = `
<div class="header-top fixed-top">
    <div class="container-fluid topbar bg-dark d-none d-lg-block">
        <div class="container">
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <a href="mailto:Farhanlearning@gmail.com" class="text-white-50 small"><i class="fas fa-envelope text-primary me-2"></i>FarhanLearning@gmail.com</a>
                    <span class="text-white-50 small mx-3">|</span>
                    <a href="#" class="text-white-50 small"><i class="fa fa-clock text-primary me-2"></i>Senin - Sabtu: 08.00 - 19.00</a>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark py-2 py-lg-0">
                <a href="index.html" class="navbar-brand">
                    <h1 class="text-primary mb-0"><i class="fas fa-dumbbell me-3"></i>Farhan Learning</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <a href="index.html" class="nav-item nav-link">Beranda</a>
                        <a href="about.html" class="nav-item nav-link">Tentang Kami</a>
                        <a href="course.html" class="nav-item nav-link">Kelas Latihan</a>
                        <a href="team.html" class="nav-item nav-link">Pelatih</a>
                        <a href="contact.html" class="nav-item nav-link">Kontak</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </div>
`;

// KODE FOOTER DIKEMBALIKAN KE VERSI ASLI
const footerHTML = `
<div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    <div class="container py-5">
        <div class="row g-5 mb-5 align-items-center">
            <div class="col-lg-7">
                <div class="position-relative d-flex" style="transform: skew(18deg);">
                    <input class="form-control border-0 w-100 py-3 pe-5" type="email" placeholder="Masukkan Email Anda">
                    <button type="button" class="btn-primary py-2 px-4 ms-3"><span>Subscribe</span></button>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="d-flex align-items-center justify-content-center justify-content-lg-end">
                    <a class="btn btn-primary btn-md-square me-3" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-primary btn-md-square me-3" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-primary btn-md-square me-3" href="#"><i class="fab fa-instagram"></i></a>
                    <a class="btn btn-primary btn-md-square me-0" href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div class="row g-5">
            <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="footer-item">
                    <h4 class="text-white mb-4"><i class="fas fa-dumbbell text-primary me-2"></i> Farhan Learning</h4>
                    <p class="mb-0">Platform untuk kesehatan dan pembentukan otot. Raih bentuk tubuh ideal Anda bersama para pelatih profesional kami.</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="footer-item">
                    <h4 class="text-white mb-4">Navigasi</h4>
                    <a href="index.html"> Beranda</a>
                    <a href="about.html"> Tentang Kami</a>
                    <a href="course.html"> Kelas Latihan</a>
                    <a href="team.html"> Pelatih</a>
                    <a href="contact.html"> Kontak</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="footer-item">
                    <h4 class="text-white mb-4"> Hubungi Kami</h4>
                    <div class="d-flex mb-2"><i class="fas fa-map-marker-alt text-primary me-3 pt-1"></i><p class="mb-0">Jl. Nasional III NO 3, Kauman, Tulungagung, Jawa Timur 66261</p></div>
                    <div class="d-flex mb-2"><i class="fas fa-envelope text-primary me-3 pt-1"></i><p class="mb-0">FarhanLearning@gmail.com</p></div>
                    <div class="d-flex"><i class="fa fa-phone-alt text-primary me-3 pt-1"></i><p class="mb-0">081235810578</p></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="footer-item">
                    <h4 class="text-white mb-4">Galeri Kami</h4>
                    <div class="row g-2">
                        <div class="col-4"><div class="footer-item-img"><a href=""><img src="img/work-1.jpg" class="img-fluid" alt="Galeri 1"></a></div></div>
                        <div class="col-4"><div class="footer-item-img"><a href=""><img src="img/work-2.jpg" class="img-fluid" alt="Galeri 2"></a></div></div>
                        <div class="col-4"><div class="footer-item-img"><a href=""><img src="img/work-3.jpg" class="img-fluid" alt="Galeri 3"></a></div></div>
                        <div class="col-4"><div class="footer-item-img"><a href=""><img src="img/work-4.jpg" class="img-fluid" alt="Galeri 4"></a></div></div>
                        <div class="col-4"><div class="footer-item-img"><a href=""><img src="img/work-5.jpg" class="img-fluid" alt="Galeri 5"></a></div></div>
                        <div class="col-4"><div class="footer-item-img"><a href=""><img src="img/work-6.jpg" class="img-fluid" alt="Galeri 6"></a></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// FUNGSI UNTUK MENEMPATKAN KODE KE DALAM HALAMAN
document.addEventListener("DOMContentLoaded", function() {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (navbarPlaceholder && typeof navbarHTML !== 'undefined') {
        navbarPlaceholder.innerHTML = navbarHTML;
    }
    if (footerPlaceholder && typeof footerHTML !== 'undefined') {
        footerPlaceholder.innerHTML = footerHTML;
    }

    const setActiveNavLink = () => {
        if (!document.querySelector('#navbarCollapse')) return;
        let currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll('#navbarCollapse .nav-item.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    };
    setActiveNavLink();
});