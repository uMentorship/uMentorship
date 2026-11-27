const slides = document.querySelector('.slides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

// go to a slide by its number (0 is the first one)
function goToSlide(number) {
    slides.scrollTo({ left: number * slides.clientWidth, behavior: 'smooth' });
}

// find which slide is showing right now
function getCurrentSlide() {
    return Math.round(slides.scrollLeft / slides.clientWidth);
}

if (slides) {
    prevBtn.addEventListener('click', function () {
        let current = getCurrentSlide();

        if (current === 0) {
            goToSlide(dots.length - 1); // go back to the last slide
        } else {
            goToSlide(current - 1);
        }
    });

    nextBtn.addEventListener('click', function () {
        let current = getCurrentSlide();

        if (current === dots.length - 1) {
            goToSlide(0); // go back to the first slide
        } else {
            goToSlide(current + 1);
        }
    });

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function () {
            goToSlide(i);
        });
    }

    // update the dots when the slide changes
    slides.addEventListener('scroll', function () {
        let current = getCurrentSlide();

        for (let i = 0; i < dots.length; i++) {
            if (i === current) {
                dots[i].classList.add('active');
            } else {
                dots[i].classList.remove('active');
            }
        }
    });
}
