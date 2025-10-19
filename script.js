const navPage = document.querySelectorAll('nav a');
const header = document.querySelector('header');

navPage.forEach(link => {
    link.addEventListener('mouseenter', () => {
        header.classList.add('highlight');
    });

    link.addEventListener('mouseleave', () => {
        header.classList.remove('highlight');
    });
});