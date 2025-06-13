/* hamburger menu for mobiles and small devices */

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


/* cv download button function */
document.querySelector('.download-cv-button').addEventListener('click', function() {
    const cv = document.createElement('a');
    cv.href = '/CV-Image/Berkay_CV.pdf'; 
    cv.download = 'Berkay_CV.pdf';        
    document.body.appendChild(cv);
    cv.click();
    document.body.removeChild(cv);
});