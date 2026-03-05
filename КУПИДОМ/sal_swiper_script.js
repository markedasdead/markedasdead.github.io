const track = document.getElementById('track');
const nextBtn = document.getElementById('salButtonNext');
const prevBtn = document.getElementById('salButtonPrev');
const slides = Array.from(track.children);

const firstClones = slides.map(s => s.cloneNode(true));
const lastClones = slides.map(s => s.cloneNode(true));

firstClones.forEach(clone => track.appendChild(clone));
lastClones.reverse().forEach(clone => track.prepend(clone));

let currentIndex = slides.length;
let isTransitioning = false;

const getSlideWidth = () => {
    const slide = track.querySelector('.sal__swiper_slide');
    return slide.offsetWidth + 20;
};

const updatePos = () => {
    track.style.transition = 'none';
    track.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
};
updatePos();

function move(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    track.style.transition = 'transform 0.5s ease-in-out';
    currentIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    track.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
}

track.addEventListener('transitionend', () => {
    isTransitioning = false;
    
    if (currentIndex >= slides.length * 2) {
        currentIndex = slides.length;
        updatePos();
    } 
    else if (currentIndex < slides.length) {
        currentIndex = slides.length * 2 - 1;
        updatePos();
    }
});

nextBtn.addEventListener('click', () => move('next'));
prevBtn.addEventListener('click', () => move('prev'));

window.addEventListener('resize', updatePos);
