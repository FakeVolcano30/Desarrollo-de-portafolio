const elementoCarrusel = document.getElementById('miCarruselBonito');

const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

const miCarruselBonito = new bootstrap.Carousel(elementoCarrusel, {
});
btnNext.addEventListener('click', () => {
    miCarruselBonito.next()
});

btnPrev.addEventListener('click', () => {
    miCarruselBonito.prev()
});