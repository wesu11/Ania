const images = document.querySelectorAll('.gallery img'); //pobiera zdjecia z <img> z klasy .gallery
const imageContainer = document.getElementById('image-container');//pobiera kontener który bedzie wyswietlal obraz i opis
const selectedImage = document.getElementById('selected-image'); //pobiera zdjecie ktore sie wyswietli
const imageDescription = document.getElementById('image-description'); //pobiera opis ktory jest podpiety do zdjecia
const body = document.body;// pobiera <body> z html zeby modyfikowac np przyciemnic

images.forEach(image => { //forEach wykonuje polecenie dla kazdego elementu image
    image.addEventListener('click', () => {//obsluguje klikniecie na kazda miniature zdjecia
        selectedImage.src = image.src;//sprawia ze po kliknieciu na miniature zdjecia pojawia sie ono w normalnym rozmiarze
        imageDescription.textContent = image.getAttribute('data-description');//pobiera opis obrazu z data-description ktory jest w html i wyswietla go w imageDescription
        // Pokazujemy kontener ze zdjęciem i opisem z animacją
        imageContainer.classList.add('show'); //dodaje klase show do kontenera zeby go pokazac
        body.classList.add('dark-background'); //dodaje klase do <body> zeby przyciemnic tlo
        
        // Po krótkiej pauzie animujemy zdjęcie i opis (opóźnienie na animację)
        setTimeout(() => {//opoznia animacje zeby byla plynna
            selectedImage.style.opacity = 1; //ustawia pelna widocznosc obrazu
            selectedImage.style.transform = "scale(1)";//skaluje obraz do pelnego rozmiaru
            imageDescription.style.opacity = 1;//ustawia pelna widocznosc opisu
            imageDescription.style.transform = "translateY(0)";//przesuwa opis na srodek poprzez translateY(0) (Y=0)
        }, 100);//opoznienie 100ms zeby animacja byla plynna
    });
});

// Zamknięcie podglądu z animacją
imageContainer.addEventListener('click', (e) => {//obsluhuje klikniecie na tlo
    if (!selectedImage.contains(e.target) && !imageDescription.contains(e.target)) {//sprawdza czy nie zostal klikniety opis lub obraz
        // Animacja przy zamykaniu
        selectedImage.style.opacity = 0;//zmniejsza widocznosc obrazu do 0
        selectedImage.style.transform = "scale(0.95)";//skaluje obraz do 95%
        imageDescription.style.opacity = 0;//zmniejsza widocznosc opisu do 0
        imageDescription.style.transform = "translateY(20px)";//przesuowa opis o 20px w dol 
        
        // Po zakończeniu animacji ukrywamy kontener
        setTimeout(() => {//opoznia ukrycie kontenera
            imageContainer.classList.remove('show');//usuwa klase show ukrywajac kontener
            body.classList.remove('dark-background');//usuwa klase dark-background przywracajac normalne tlo
        }, 300); // opoznienie 300ms, opoznienie musi byc takie samo co dlugosc animacji
    }
});
