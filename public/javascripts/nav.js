const nav = document.querySelector('nav');
const handleNavScroll = () => {
    if(isScrollingDown()) {
        nav.classList.add('scroll-down');
        nav.classList.remove('scroll-up');
    } else {
        nav.classList.add('scroll-up');
        nav.classList.remove('scroll-down');
    }
}