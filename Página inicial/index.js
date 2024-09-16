document.addEventListener('DOMContentLoaded', function() {

//Carrossel
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else { 
        currentIndex = index;
    }
    carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

showSlide(currentIndex);
setInterval(nextSlide, 3000);

//Temporizador 
            function startIdleTimer() {
                let timeout;
                function resetTimer() {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => alert('Você não está ativo a 4 minutos'), 4 * 1 * 1000);
                }

                document.addEventListener('mousemove', resetTimer);
                document.addEventListener('keypress', resetTimer);
                resetTimer();
            }
});    
//Alerta de boas-vindas alert('Bem-vindo ao site oficial da Academia Spartans! Confira nossos planos e aulas!');

window.onload = () => {
    document.getElementById('popup').style.display  = 'block';
};

document.querySelector("#closebtn").addEventListener("click", () => {
    document.getElementById('popup').style.display = 'none';
});
//coki
document.querySelector(".cookies-btn").addEventListener("click", () => {
    document.querySelector(".cookies-msg").style.display = 'none';
});

function aceito() {
    document.querySelector(".cookies-msg").remove(); 
}

document.querySelector(".cookies-btn").addEventListener("click", aceito);
