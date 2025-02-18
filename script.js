document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    const navItems = document.querySelectorAll('nav ul li');

    if (!menuIcon || !nav) {
        console.warn('Menu icon or navigation element is missing.');
        return;
    }

    
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuIcon.classList.toggle('active');

        
        if (menuIcon.classList.contains('active')) {
            menuIcon.style.color = '#ffd700'; 
        } else {
            menuIcon.style.color = ''; 
        }

        
        navItems.forEach((item, index) => {
            item.style.animation = nav.classList.contains('active')
                ? `fadeIn 0.5s ease forwards ${index / 7 + 0.2}s`
                : '';
        });
    });

    
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuIcon.classList.remove('active');

            // Reset barvy hamburger menu při zavření
            menuIcon.style.color = '';

            // Reset animací navigačních položek
            navItems.forEach(item => {
                item.style.animation = '';
            });
        });

        
        link.addEventListener('mouseover', () => {
            link.style.color = '#ffd700'; 
        });

        link.addEventListener('mouseout', () => {
            link.style.color = ''; 
        });
    });
});