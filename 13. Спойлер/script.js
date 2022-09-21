let spoilers = document.querySelectorAll('.spoiler');
let toggles = document.querySelectorAll('.toggle');

for (let i = 0; i < spoilers.length; i++) {
    toggles[i].addEventListener('click', () => spoilers[i].classList.toggle('active'));
}