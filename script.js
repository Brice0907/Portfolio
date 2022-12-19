import SimpleParallax from 'simple-parallax-js';

const image = document.getElementsByClassName('bloc_page_concernant_fond_img');
new SimpleParallax(image, {
    scale: 0.3,
    overflow: true,
    customWrapper: ".bloc_page_concernant_fond"
});