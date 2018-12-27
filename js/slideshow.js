(() => {
    let images = [
        "bg1.webp",
        "bg2.webp",
        "bg3.webp"
    ];

    let imageElts = [];

    let curImg = 0;
    let elt = document.querySelector('#slideshow');

    function loadImages() {
        images.forEach(image => {
            let img = document.createElement('IMG');
            img.classList.add('slide');
            img.style.display = 'none';
            img.setAttribute('src', `./img/slideshow/${image}`);
            imageElts.push(img);
            elt.appendChild(img);
        });
        slideshow();
    }

    function slideshow() {
        imageElts[curImg].style.display = 'block';
        curImg++;
        setInterval(nextSlide, 4000);
    }

    function nextSlide() {
        imageElts.forEach(img => {
            img.style.display = 'none';
        })
        imageElts[curImg].style.display = 'block';
        curImg++;
        if(curImg >= images.length) {
            curImg = 0;
        }
    }

    loadImages();
})();