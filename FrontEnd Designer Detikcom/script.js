let currentIndex = 0;
const totalSlides = document.querySelectorAll('.activity-2').length;

function showSlide(index) {
    const slides = document.querySelectorAll('.activity-2');
    currentIndex = (index + totalSlides) % totalSlides;

    slides.forEach((slide, i) => {
        if (i === currentIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentIndex);