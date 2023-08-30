document.addEventListener("DOMContentLoaded", function () {
    const slideText = document.querySelector(".slide-text");

    let currentSlideIndex = 0;
    function updateSlideText() {
        const currentSlideText = slideTexts[currentSlideIndex];
        slideText.innerHTML = `
            <h2>${currentSlideText.title}</h2>
            <p>${currentSlideText.description}</p>
        `;
        currentSlideIndex = (currentSlideIndex + 1) % slideTexts.length;
    }
    updateSlideText();


    const slideUpdateInterval = 10000; 
    setInterval(updateSlideText, slideUpdateInterval);
});
