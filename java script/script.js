document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');
    const options = {
        threshold: 0.5,
        rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-slide');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const navLinks = document.querySelectorAll('nav a');
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY;

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop + 50 &&
                section.offsetTop + section.offsetHeight > fromTop + 50
            ) {
                link.classList.add('scroll-highlight');
            } else {
                link.classList.remove('scroll-highlight');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('background-music');
    const musicControlButton = document.getElementById('music-control-button');

    let isMusicPlaying = false;

    backgroundMusic.volume = 0.1;

    musicControlButton.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicControlButton.textContent = 'Puść sobie muzyczke!';
            isMusicPlaying = false;
        } else {
            backgroundMusic.play()
                .then(() => {
                    musicControlButton.textContent = 'Zatrzymaj sobie muzyczke';
                    isMusicPlaying = true;
                })
                .catch((error) => {
                    console.log('Błąd podczas odtwarzania muzyki:', error);
                });
        }
    });
});