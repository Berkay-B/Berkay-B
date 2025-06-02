/* hamburger menufor mobiles and small devices */

const hamburg = document.querySelector('.hamburg');
const cancel = document.querySelector('.cancel');
const dropdown = document.querySelector('.dropdown');

hamburg.addEventListener('click', () => {
    dropdown.classList.add('active');
    hamburg.style.display = 'none';
    cancel.style.display = 'block';
});

cancel.addEventListener('click', () => {
    dropdown.classList.remove('active');
    cancel.style.display = 'none';
    hamburg.style.display = 'block';
});