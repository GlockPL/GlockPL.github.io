document.addEventListener('DOMContentLoaded', function() {
    const yearP = document.createElement('p');
    yearP.textContent = new Date().getFullYear();
    document.querySelector('footer').appendChild(yearP);
});
