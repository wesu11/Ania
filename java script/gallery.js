const images = document.querySelectorAll('.gallery img');
const imageContainer = document.getElementById('image-container');
const selectedImage = document.getElementById('selected-image');
const imageDescription = document.getElementById('image-description');
const body = document.body;

images.forEach(image => {
    image.addEventListener('click', () => {
        selectedImage.src = image.src;
        imageDescription.textContent = image.getAttribute('data-description');
        imageContainer.classList.add('show');
        body.classList.add('dark-background');

        setTimeout(() => {
            selectedImage.style.opacity = 1;
            selectedImage.style.transform = "scale(1)";
            imageDescription.style.opacity = 1;
            imageDescription.style.transform = "translateY(0)";
        }, 100);
    });
});

imageContainer.addEventListener('click', (e) => {
    if (!selectedImage.contains(e.target) && !imageDescription.contains(e.target)) {
        selectedImage.style.opacity = 0;
        selectedImage.style.transform = "scale(0.95)";
        imageDescription.style.opacity = 0;
        imageDescription.style.transform = "translateY(20px)";

        setTimeout(() => {
            imageContainer.classList.remove('show');
            body.classList.remove('dark-background');
        }, 300);
    }
});