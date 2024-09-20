let currentSlides = {
    'carousel-2021': 0,
    'carousel-2022': 0,
    'carousel-2023': 0,
    'carousel-2024': 0,
};

function moveSlide(direction, carouselId) {
    const imagesContainer = document.querySelector(`#${carouselId} .carousel-images`);
    const totalImages = imagesContainer.children.length;
    
    currentSlides[carouselId] += direction;

    if (currentSlides[carouselId] < 0) {
        currentSlides[carouselId] = totalImages - 1;
    } else if (currentSlides[carouselId] >= totalImages) {
        currentSlides[carouselId] = 0;
    }

    const offset = -currentSlides[carouselId] * (100 / totalImages);
    imagesContainer.style.transform = `translateX(${offset}%)`;
}
