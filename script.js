document.addEventListener('DOMContentLoaded', function() {
    // Efecto Parallax
    const parallaxSection = document.getElementById('parallax-section');
    const parallaxBackground = document.querySelector('.parallax-background');

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        parallaxBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
    });

    // Slider de Imágenes
    const slides = document.querySelectorAll('#image-slider .slide');
    const prevButton = document.querySelector('#image-slider .prev');
    const nextButton = document.querySelector('#image-slider .next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
        // Iniciar el slider automáticamente (opcional)
        // setInterval(nextSlide, 3000);
    }

    // Animación SVG (ejemplo básico - puedes hacerlo más complejo con CSS o JS)
    const lotusPath = document.getElementById('lotus');
    if (lotusPath) {
        lotusPath.addEventListener('mouseover', function() {
            this.style.fill = '#ccf';
            this.style.transition = 'fill 0.3s ease-in-out';
        });
        lotusPath.addEventListener('mouseout', function() {
            this.style.fill = '#f9f';
            this.style.transition = 'fill 0.3s ease-in-out';
        });
    }
});