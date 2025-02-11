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
    let isMusicPlaying = false; // Flaga, czy muzyka jest odtwarzana

    // Ustaw głośność muzyki tła na 10%
    backgroundMusic.volume = 0.1;
    // Ustaw głośność muzyki Star Wars na 30%
    starWarsMusic.volume = 0.3;

    // Obsługa przycisku do odtwarzania/wyciszania muzyki
    musicControlButton.addEventListener('click', () => {
        if (isMusicPlaying) {
            // Wycisz muzykę
            backgroundMusic.pause();
            musicControlButton.textContent = 'Włącz muzykę';
            isMusicPlaying = false;
        } else {
            // Odtwórz muzykę
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

    // Obsługa stanu klawiszy "A" i "I"
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

    // Funkcja do uciekania przycisku przed kursorem
    button.addEventListener('mouseover', (e) => {
        // Blokuj uciekanie, jeśli klawisze "A" i "I" są przytrzymane
        if (!isButtonMoving && !(isAKeyPressed && isIKeyPressed)) {
            isButtonMoving = true;

            const buttonRect = button.getBoundingClientRect();
            const containerRect = imageContainer.getBoundingClientRect();

            // Oblicz nową pozycję przycisku, aby nie wychodził poza kontener
            let newX = Math.random() * (containerRect.width - buttonRect.width);
            let newY = Math.random() * (containerRect.height - buttonRect.height);

            // Ustaw nową pozycję przycisku
            button.style.transition = 'all 0.3s ease-in-out';
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;

            // Zresetuj flagę po zakończeniu animacji
            setTimeout(() => {
                isButtonMoving = false;
            }, 300);
        }
    });

    // Funkcja do uruchomienia animacji Star Wars
    button.addEventListener('click', () => {
        if (isAKeyPressed && isIKeyPressed) {
            startStarWarsAnimation();
        }
    });

    function startStarWarsAnimation() {
        // Wstrzymaj muzykę tła
        backgroundMusic.pause();
        musicControlButton.textContent = 'Włącz muzykę'; // Zmień przycisk na "Włącz muzykę"
        isMusicPlaying = false;

        // Rozpocznij animację Star Wars
        overlay.style.display = 'flex';
        starWarsMusic.play();

        // Ukryj przycisk "Zamknij" na początku animacji
        closeButton.style.display = 'none';

        // Pokaż przycisk "Zamknij" po zakończeniu animacji
        setTimeout(() => {
            closeButton.style.display = 'block';
        }, 10000); // 10 sekund = czas trwania animacji
    }

    // Obsługa przycisku "Zamknij"
    closeButton.addEventListener('click', () => {
        // Zakończ animację Star Wars
        overlay.style.display = 'none';
        starWarsMusic.pause();
        starWarsMusic.currentTime = 0;

        // Wznów muzykę tła
        backgroundMusic.play();
        musicControlButton.textContent = 'Wycisz muzykę'; // Zmień przycisk na "Wycisz muzykę"
        isMusicPlaying = true;
    });
});