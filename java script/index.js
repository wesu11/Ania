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

    setInitialButtonPosition();

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
        musicControlButton.textContent = 'Puść sobie muzyczke!';
        isMusicPlaying = false;

        overlay.style.display = 'flex';
        setTimeout(() => {
            overlay.classList.add('active');
        }, 10);

        starWarsMusic.play();

        setTimeout(() => {
            closeButton.style.display = 'block';
        }, 10000);
    }

    closeButton.addEventListener('click', () => {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000);
        starWarsMusic.pause();
        starWarsMusic.currentTime = 0;
        closeButton.style.display = 'none';
    });

    function setInitialButtonPosition() {
        const buttonRect = button.getBoundingClientRect();
        const containerRect = imageContainer.getBoundingClientRect();

        let initialX = Math.random() * (containerRect.width - buttonRect.width);
        let initialY = Math.random() * (containerRect.height - buttonRect.height);

        button.style.left = `${initialX}px`;
        button.style.top = `${initialY}px`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-image');
    let isShiftPressed = false;

    // Tworzenie czarnego ekranu z błędem
    const destructionOverlay = document.createElement('div');
    Object.assign(destructionOverlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        background: 'black',
        color: '#00FF41', // Zielony jak w terminalu
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Tekst od góry
        alignItems: 'flex-start', // Tekst od lewej
        fontFamily: '"Courier New", monospace',
        fontSize: '1.5vw',
        textAlign: 'left',
        padding: '20px',
        boxSizing: 'border-box',
        zIndex: '9999',
        overflow: 'hidden', // Zapobiega przewijaniu
        display: 'none' // Ukryty na start
    });
    document.body.appendChild(destructionOverlay);

    // Obsługa przytrzymania Shifta
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Shift') isShiftPressed = true;
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Shift') isShiftPressed = false;
    });

    // Kliknięcie w obrazek przytrzymując Shift
    mainImage.addEventListener('click', () => {
        if (isShiftPressed) startDestructionSequence();
    });

    function startDestructionSequence() {
        destructionOverlay.style.display = 'flex';
        
        const text = [
            "⚠️ SYSTEM FAILURE DETECTED\n\n",
            "Unauthorized system interaction has caused an irreparable integrity breach.\n",
            "Error Code: EXCEPTION_ACCESS_VIOLATION (0xC0000005)\n",
            "Recursive memory allocation failure in protected stack space.\n",
            "Critical data corruption detected in sector 0x1A3F7C.\n",
            "System shutdown protocol initiated.\n\n"
        ];

        let currentText = "";
        let charIndex = 0;
        let fullText = text.join(""); // Łączy wszystko w jedną całość

        function typeEffect() {
            if (charIndex < fullText.length) {
                currentText += fullText[charIndex];
                destructionOverlay.innerHTML = `<pre style="white-space: pre-wrap;">${currentText}</pre>`;
                charIndex++;
                setTimeout(typeEffect, 50); // Szybsze tempo, ale nadal litera po literze
            } else {
                startCountdown();
            }
        }

        typeEffect();
    }

    function startCountdown() {
        let countdown = 10;

        // Stworzenie kontenera odliczania
        const countdownContainer = document.createElement('div');
        Object.assign(countdownContainer.style, {
            position: 'absolute',
            bottom: '10%', // Odliczanie jest niżej, nie zasłania tekstu
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            fontSize: '4vw',
            fontWeight: 'bold',
            color: 'red'
        });

        const countdownText = document.createElement('p');
        countdownText.textContent = "Laptop shutdown in:";
        countdownText.style.marginBottom = '10px';

        const countdownNumber = document.createElement('p');
        countdownNumber.textContent = countdown;
        countdownNumber.style.fontSize = '6vw';

        countdownContainer.appendChild(countdownText);
        countdownContainer.appendChild(countdownNumber);
        destructionOverlay.appendChild(countdownContainer);

        const countdownInterval = setInterval(() => {
            countdown--;
            countdownNumber.textContent = countdown;

            if (countdown === 0) {
                clearInterval(countdownInterval);
                location.reload(); // Restart strony
            }
        }, 1000);
    }
});
