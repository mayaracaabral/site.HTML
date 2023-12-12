document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('myCarousel');
    let currentIndex = 0;

    function showSlide(index) {
        const items = document.querySelectorAll('.carousel-item');
        currentIndex = (index + items.length) % items.length;

        items.forEach((item, i) => {
            item.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
        });
    }

    function changeSlide(direction) {
        showSlide(currentIndex + direction);
    }

    // Configura os botões de navegação
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));

    // Configura a transição automática
    setInterval(() => changeSlide(1), 3000);
});

