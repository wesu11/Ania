document.addEventListener('DOMContentLoaded', () => { // Nasłuchuje zdarzenia, gdy cała zawartość strony (DOM) została załadowana
    const sections = document.querySelectorAll('main section'); // Pobiera wszystkie sekcje w elemencie <main>
    const options = { // Opcje dla IntersectionObserver
        threshold: 0.5, // Procent widoczności sekcji wymagany do wywołania obserwatora (50%)
        rootMargin: "0px 0px -10% 0px" // Margines wokół obszaru obserwacji (przesunięcie o 10% od dołu)
    };

    const observer = new IntersectionObserver((entries) => { // Tworzy nowy IntersectionObserver do obserwowania sekcji
        entries.forEach(entry => { // Iteruje przez wszystkie obserwowane elementy
            if (entry.isIntersecting) { // Sprawdza, czy sekcja jest widoczna
                entry.target.classList.add('fade-slide'); // Dodaje klasę 'fade-slide' do widocznej sekcji
            }
        });
    }, options); // Przekazuje opcje do obserwatora

    sections.forEach(section => { // Iteruje przez wszystkie sekcje
        observer.observe(section); // Rozpoczyna obserwację każdej sekcji
    });

    const navLinks = document.querySelectorAll('nav a'); // Pobiera wszystkie linki w nawigacji
    window.addEventListener('scroll', () => { // Nasłuchuje zdarzenia przewijania strony
        let fromTop = window.scrollY; // Pobiera aktualną pozycję przewijania od góry strony

        navLinks.forEach(link => { // Iteruje przez wszystkie linki nawigacyjne
            let section = document.querySelector(link.hash); // Pobiera sekcję powiązaną z linkiem (hash)

            if ( // Sprawdza, czy sekcja jest aktualnie widoczna na ekranie
                section.offsetTop <= fromTop + 50 && // Sprawdza, czy górna krawędź sekcji jest powyżej pozycji przewijania
                section.offsetTop + section.offsetHeight > fromTop + 50 // Sprawdza, czy dolna krawędź sekcji jest poniżej pozycji przewijania
            ) {
                link.classList.add('scroll-highlight'); // Dodaje klasę 'scroll-highlight' do aktywnego linku
            } else {
                link.classList.remove('scroll-highlight'); // Usuwa klasę 'scroll-highlight' z nieaktywnych linków
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show'); // Przełącza klasę 'show' na menu
    });
});