let parent = document.querySelector('#parent');
let menu = document.querySelectorAll('.menu a');
let tabs = document.querySelectorAll('.tab');

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', () => {
        parent.querySelector('.menu a.active').classList.remove('active');
        parent.querySelector('.tab.active').classList.remove('active');
        tabs[i].classList.add('active');
        menu[i].classList.add('active');
    });
}