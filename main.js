const monthArea = document.querySelector('.switch');
const monthBtn = document.querySelector('.switch-btn');

monthArea.addEventListener('click', () => {
    monthArea.classList.toggle('switch-active');
    monthBtn.classList.toggle('switch-btn-active');
})