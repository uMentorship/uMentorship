const slides = document.querySelector('.slides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (slides) {
    prevBtn.addEventListener('click', function () {
        slides.scrollBy({ left: -slides.clientWidth, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', function () {
        slides.scrollBy({ left: slides.clientWidth, behavior: 'smooth' });
    });
}
