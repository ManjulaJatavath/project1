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
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
        contactLink.addEventListener('click', function (e) {
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
        });
    }
});
function toggleReadMore(button) {
    const card = button.closest('.card');
    const paragraph = card.querySelector('.content p');
    if (paragraph.classList.contains('hidden')) {
        paragraph.classList.remove('hidden');
        button.textContent = 'Read Less';
    } else {
        paragraph.classList.add('hidden');
        button.textContent = 'Read More';
    }
}