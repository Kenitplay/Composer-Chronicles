window.onscroll = function() { toggleStickyNavbar() };
    
        const navbar = document.querySelector('.navbar');
    
        function toggleStickyNavbar() {
            if (window.pageYOffset > navbar.offsetTop) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }