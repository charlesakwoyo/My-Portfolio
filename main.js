const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');

    function openSidebar() {
      sidebar.classList.add('active');
      overlay.classList.add('active');
    }

    function closeSidebar() {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    }

    menuToggle.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const totalSlides = slideImages.length;

let currentIndex = 0;


function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; 
    }
    updateSlider();
}


function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(nextSlide, 5000);