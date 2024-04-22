document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const sections = document.querySelectorAll('section');
  
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
  
                // Add 'active' class to the target section and remove it from others
                sections.forEach(section => {
                    if (section.id === targetId) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            }
  
            // Close the menu if a link is clicked (for smaller screens)
            menu.classList.remove('show');
        });
    });
  
    // Toggle the menu when clicking on the menu icon
    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
  });
  