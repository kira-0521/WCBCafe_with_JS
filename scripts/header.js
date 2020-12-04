const target = document.querySelector('.nav-trigger');
const header = document.querySelector('.header');


const cb = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            header.classList.remove('triggered');
        } else {
            header.classList.add('triggered');
        }
    });
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

const io = new IntersectionObserver(cb, options, {once: false});
io.observe(target);

