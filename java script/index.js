document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.escape-button');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.close-button');
    const backgroundMusic = document.getElementById('background-music');
    const starWarsMusic = document.getElementById('star-wars-music');
    const musicControlButton = document.getElementById('music-control-button');
    const imageContainer = document.querySelector('.image-container');

    let isButtonMoving = false;
    let isAKeyPressed = false;
    let isIKeyPressed = false;
    let isMusicPlaying = false; 

    backgroundMusic.volume = 0.1;
    starWarsMusic.volume = 0.3;

    musicControlButton.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicControlButton.textContent = 'Włącz muzykę';
            isMusicPlaying = false;
        } else {
            backgroundMusic.play()
                .then(() => {
                    musicControlButton.textContent = 'Wycisz muzykę';
                    isMusicPlaying = true;
                })
                .catch((error) => {
                    console.log('Błąd podczas odtwarzania muzyki:', error);
                });
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'a' || e.key === 'A') {
            isAKeyPressed = true;
        }
        if (e.key === 'i' || e.key === 'I') {
            isIKeyPressed = true;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'a' || e.key === 'A') {
            isAKeyPressed = false;
        }
        if (e.key === 'i' || e.key === 'I') {
            isIKeyPressed = false;
        }
    });

    button.addEventListener('mouseover', (e) => {
        if (!isButtonMoving && !(isAKeyPressed && isIKeyPressed)) {
            isButtonMoving = true;

            const buttonRect = button.getBoundingClientRect();
            const containerRect = imageContainer.getBoundingClientRect();

            let newX = Math.random() * (containerRect.width - buttonRect.width);
            let newY = Math.random() * (containerRect.height - buttonRect.height);

            button.style.transition = 'all 0.3s ease-in-out';
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;

            setTimeout(() => {
                isButtonMoving = false;
            }, 300);
        }
    });

    button.addEventListener('click', () => {
        if (isAKeyPressed && isIKeyPressed) {
            startStarWarsAnimation();
        }
    });

    function startStarWarsAnimation() {
        backgroundMusic.pause();
        musicControlButton.textContent = 'Włącz muzykę'; 
        isMusicPlaying = false;

        overlay.style.display = 'flex';
        starWarsMusic.play();

        closeButton.style.display = 'none';

        setTimeout(() => {
            closeButton.style.display = 'block';
        }, 10000);
    }

    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        starWarsMusic.pause();
        starWarsMusic.currentTime = 0;

        backgroundMusic.play();
        musicControlButton.textContent = 'Wycisz muzykę';
        isMusicPlaying = true;
    });
});