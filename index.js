document.addEventListener('DOMContentLoaded', function() {
            // Alerta de boas-vindas
            alert('Bem-vindo ao site oficial da Academia Spartans! Confira nossos planos e aulas!');

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

//coki
    var msgCookies = document.getElementById('cookies-msg')
    function aceito() {
        localStorage.lgpd = "sim"
        msgCookies.classList.remove('mostrar')
    }
    if(localStorage.lgpd == 'sim'){
       msgCookies.classList.remove('mostrar')
    }else{
        msgCookies.classList.add('mostrar')
    }
//Temporizador 
            function startIdleTimer() {
                let timeout;
                function resetTimer() {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => alert('Você ficou inativo por 5 minutos!'), 5 * 60 * 1000);
                }

                document.addEventListener('mousemove', resetTimer);
                document.addEventListener('keypress', resetTimer);
                resetTimer();
            }
});    