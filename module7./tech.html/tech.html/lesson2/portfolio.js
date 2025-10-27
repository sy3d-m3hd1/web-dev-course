// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Navbar shrink on scroll
    const navbar = document.querySelector('#main-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Activate Bootstrap scrollspy
    const mainNav = document.body.querySelector('#main-nav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#main-nav',
            offset: 100, // Adjust this offset based on your navbar's height
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // We calculate the offset to account for the fixed navbar height
                const headerOffset = 70; // Adjust this if your nav height is different
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});