document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const sections = document.querySelectorAll('section');
    const photos = document.querySelectorAll('.photo');
    const menuItems = document.querySelectorAll('.item'); // Select all menu items
    let currentMenuItemIndex = 0;
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                sections.forEach(section => {
                    if (section.id === targetId) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            }
            menu.classList.remove('show');
        });
    });

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
    
    // Function to handle continuous scrolling through menu items
    function handleScroll() {
        const threshold = window.innerHeight * 0.5; 
        const lastMenuItem = menuItems[menuItems.length - 1];
        
        if (lastMenuItem.getBoundingClientRect().top <= threshold) {
            // Show next menu item
            currentMenuItemIndex++;
            if (currentMenuItemIndex >= menuItems.length) {
                currentMenuItemIndex = 0;
            }
            menuItems[currentMenuItemIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Add scroll event listener to trigger continuous menu item scrolling
    window.addEventListener('scroll', handleScroll);
});
