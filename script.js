const slider = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderImages = document.querySelectorAll('.slider-image');
let currentIndex = 0;
const imageWidth = sliderImages[0].offsetWidth;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1 ) % sliderImages.length;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});
 

const sliders = document.querySelector('.slider-container');
const sliderImage = document.querySelectorAll('.slider-image img');
const saladImg = document.querySelector('.salad img');
const countSpan = document.querySelector('.sp span');
let current=0;
let count=0;

countSpan.textContent = count;

sliderImage.forEach((img, index) => {
    img.addEventListener('click', () => {
        current = index;
        updateSlider();
        updateCount();
    });
});

function updateSlider() {
    const imageWidth = sliderImage[0].offsetWidth;
    sliders.style.transform = `translate(-${current * imageWidth}px)`;
}

function updateCount() {
    const currentSrc = sliderImage[current].src;
    saladImg.src = currentSrc;
    count++;
    countSpan.textContent =count;
}

const stars = document.querySelectorAll('.stars i');
stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        const rating = index + 1;
        setRating(rating);
    });
});
 function setRating(rating){
    const stars = document.querySelectorAll('.stars i');
    const message = document.querySelector('.message');
    stars.forEach((star,index)=>{
        setTimeout(() => {
            if(index < rating){
                star.classList.add('active');
            }else{
                star.classList.remove('active')
            }
        }, index * 100);
 });
    if(rating === 1) {
        message.textContent ='Poor';
    } else if(rating === 2){
        message.textContent = 'Fair';
    } else if(rating === 3){
        message.textContent ='Good';
    }else if(rating === 4){
        message.textContent = 'Very good';
    }else if(rating === 5){
        message.textContent = 'Excellent';
    } else {
        message.textContent ='';
    }
 }





