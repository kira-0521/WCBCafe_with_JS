const navTrigger = document.querySelector('.nav-trigger');
const header = document.querySelector('.header');
const pageTop = document.querySelector('#page_top');
const coverSlide = document.querySelector('.cover-slide');


// コールバック関数
const cb = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            header.classList.remove('triggered');
            pageTop.style.visibility = "hidden";
            coverSlide.classList.add('inview');
        } else {
            header.classList.add('triggered');
            pageTop.style.visibility = "visible";
        }
    });
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

const targets = [];
targets.push(navTrigger);
targets.push(coverSlide);


const io = new IntersectionObserver(cb, options, {once: false});
io.observe(target);

