const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden');
    nav.style.right = 0;
    closeMenu.style.color = 'white';
});

closeMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden');
    nav.style.right = '-100%';
    closeMenu.style.color = 'black';
});