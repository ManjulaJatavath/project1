document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const sections = document.querySelectorAll('section');
    const photos = document.querySelectorAll('.photo'); // Assuming your photos have a class 'photo'
    let currentPhotoIndex = 0;

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

    // Function to handle continuous scrolling through photos
    function handleScroll() {
        const threshold = window.innerHeight * 0.5; // Adjust this value as needed
        const lastPhoto = photos[photos.length - 1];
        
        if (lastPhoto.getBoundingClientRect().top <= threshold) {
            // Show next photo
            currentPhotoIndex++;
            if (currentPhotoIndex >= photos.length) {
                currentPhotoIndex = 0; // Restart from the first photo
            }
            photos[currentPhotoIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Add scroll event listener to trigger continuous photo scrolling
    window.addEventListener('scroll', handleScroll);
});
