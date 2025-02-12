document.addEventListener("DOMContentLoaded", () => {
    const mainPic = document.getElementById("main_pic");
    const mainText = document.querySelector("#main_div p");
    const mainDiv = document.getElementById("main_div");

    const defaultImageMargin = 0;
    const imageShiftAmount = 50;

    if (mainPic) {
        mainPic.addEventListener("mouseenter", () => {
            mainPic.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
            mainPic.style.transform = "scale(1.15) rotate(2deg)";
            mainPic.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.5)";
        });

        mainPic.addEventListener("mouseleave", () => {
            mainPic.style.transform = "scale(1) rotate(0deg)";
            mainPic.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
        });
    }

    if (mainText) {
        mainText.addEventListener("mouseenter", () => {
            mainText.style.transition = "transform 0.3s ease-in-out, color 0.3s ease-in-out, text-shadow 0.3s ease-in-out";
            mainText.style.transform = "scale(1.03) translateX(0px)";
            mainText.style.color = "#ab0072";
            mainText.style.textShadow = "4px 4px 10px rgba(0, 0, 0, 0.4)";

            mainDiv.style.transition = "transform 0.3s ease-in-out";
            mainDiv.style.transform = `translateX(-${imageShiftAmount}px)`;
        });

        mainText.addEventListener("mouseleave", () => {
            mainText.style.transform = "scale(1) translateX(0px)";
            mainText.style.color = "#000";
            mainText.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";

            mainDiv.style.transform = `translateX(0)`;
        });
    }
});