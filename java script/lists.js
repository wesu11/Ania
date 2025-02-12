document.addEventListener("DOMContentLoaded", function () {
    const tiles = document.querySelectorAll(".tile");
    const tilesContainer = document.querySelector(".tiles-container");
    const textDisplay = document.getElementById("displayed-text");
    const textDisplayContainer = document.querySelector(".text-display");

    let activeTile = null;

    tiles.forEach(tile => {
        tile.addEventListener("click", function () {
            if (activeTile === tile) {
                tile.classList.remove("active");
                tilesContainer.classList.remove("hide-other-tiles");

                textDisplayContainer.classList.remove("visible");
                setTimeout(() => {
                    textDisplayContainer.style.display = "none";
                }, 500);

                document.body.classList.remove("scrollable"); 

                activeTile = null;
            } else {
                const text = tile.getAttribute("data-text");

                textDisplay.textContent = text;
                textDisplayContainer.style.display = "block";

                setTimeout(() => {
                    textDisplayContainer.classList.add("visible");
                }, 10);

                if (textDisplay.scrollHeight > textDisplay.clientHeight) {
                    document.body.classList.add("scrollable");
                } else {
                    document.body.classList.remove("scrollable");
                }

                tiles.forEach(t => t.classList.remove("active"));
                tile.classList.add("active");

                tilesContainer.classList.add("hide-other-tiles");

                activeTile = tile;
            }
        });
    });
});