document.addEventListener("DOMContentLoaded", () => {
    const mainPic = document.getElementById("main_pic");
    const mainText = document.querySelector("#main_div p"); // Pobieramy tekst w divie
    const mainDiv = document.getElementById("main_div"); // Pobieramy główny div

    // Ustawiamy podstawowy margines dla zdjęcia
    const defaultImageMargin = 0; // Domyślny margines zdjęcia
    const imageShiftAmount = 50; // Wartość, o którą przesuwamy zdjęcie, gdy tekst się animuje

    if (mainPic) {
        mainPic.addEventListener("mouseenter", () => {
            // Dodajemy animację dla zdjęcia
            mainPic.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
            mainPic.style.transform = "scale(1.15) rotate(2deg)";
            mainPic.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.5)";
        });

        mainPic.addEventListener("mouseleave", () => {
            // Zwalniamy zdjęcie do początkowej pozycji
            mainPic.style.transform = "scale(1) rotate(0deg)";
            mainPic.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
        });
    }

    if (mainText) {
        mainText.addEventListener("mouseenter", () => {
            mainText.style.transition = "transform 0.3s ease-in-out, color 0.3s ease-in-out, text-shadow 0.3s ease-in-out";
            mainText.style.transform = "scale(1.05) translateX(0px)"; // Powiększenie i przesunięcie w prawo
            mainText.style.color = "#ab0072"; // Zmiana koloru tekstu na pomarańczowy
            mainText.style.textShadow = "4px 4px 10px rgba(0, 0, 0, 0.5)"; // Zwiększenie cienia tekstu

            // Dodajemy przesunięcie zdjęcia w lewo, by nie kolidowało z tekstem
            mainDiv.style.transition = "transform 0.3s ease-in-out";
            mainDiv.style.transform = `translateX(-${imageShiftAmount}px)`; // Przesunięcie zdjęcia w lewo
        });

        mainText.addEventListener("mouseleave", () => {
            mainText.style.transform = "scale(1) translateX(0px)"; // Powrót do normalnego rozmiaru i pozycji
            mainText.style.color = "#000"; // Powrót do domyślnego koloru czarnego
            mainText.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)"; // Powrót do początkowego cienia

            // Przywrócenie zdjęcia do pierwotnej pozycji
            mainDiv.style.transform = `translateX(0)`; // Powrót zdjęcia na miejsce
        });
    }
});
