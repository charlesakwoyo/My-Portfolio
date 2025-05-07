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

// Function to move to the next slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSlider();
}

// Function to update the slider position
function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);