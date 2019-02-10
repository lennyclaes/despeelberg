(() => {
    let btn = document.querySelector('.nav__link--res');
    let btnIcon = document.querySelector('.fas');
    let links = document.querySelectorAll('.nav__link:not(:last-child)');
    let open = false;

    btn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if(open) {
            open = false;
            links.forEach(l => {
                l.style.display = 'none';
            });
            btnIcon.classList.toggle('fa-bars');
            btnIcon.classList.toggle('fa-times');
        } else {
            open = true;
            links.forEach(l => {
                l.style.display = 'block';
            });
            btnIcon.classList.toggle('fa-bars');
            btnIcon.classList.toggle('fa-times');
        }
    }
})();