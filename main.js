const monthArea = document.querySelector('.switch');
const monthBtn = document.querySelector('.switch-btn');
const range = document.querySelector('.myrange');
const views = document.querySelector('.views');
const price = document.querySelector('#final-price');

monthArea.addEventListener('click', () => {
    monthArea.classList.toggle('switch-active');
    monthBtn.classList.toggle('switch-btn-active');
})

range.addEventListener('input', () =>{
    if(range.value == 1) {
        if(monthArea.classList.contains('switch-active')){
            price.textContent = 6;
        }
        else {
            price.textContent = 8;
        }

        views.textContent = "10k";
    }
    if(range.value == 2) {
        if(monthArea.classList.contains('switch-active')) {
            price.textContent = 9;
        } else {
            price.textContent = 12;
        }
        views.textContent = "50k";
    }
    if(range.value == 3) {
        if(monthArea.classList.contains('switch-active')) {
            price.textContent = 12;
        } else {
            price.textContent = 16;
        }
        views.textContent = "100k";
    }
    if(range.value == 4) {
        if(monthArea.classList.contains('switch-active')){
            price.textContent = 18;
        } else {
            price.textContent = 24;
        }
        views.textContent = "500k";
    }
    if(range.value == 5) {
        if(monthArea.classList.contains('switch-active')){
            price.textContent = 27;
        } else {
            price.textContent = 36;
        }
        views.textContent = "1M";
    }
})