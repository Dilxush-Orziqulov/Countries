let dark = document.querySelector('.dark');
let light = document.querySelector('.light');
let btn = document.querySelector('.btn');
let dropdown = document.querySelector('.dropdown');
let show = document.querySelector('.show');
let hide = document.querySelector('.hide');

btn.addEventListener('click', () => {
    if (dark.classList.toggle('light')) {
        btn.textContent = 'Dark Mode'
    } else {
        btn.textContent = 'Light Mode'
    }
});

dropdown.addEventListener('click', () => {
    if (hide.classList.toggle('show')) {

    }
})