function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.getBoundingClientRect().top + window.scrollY
    });
}

document.getElementById("scrollToTopButton").addEventListener('click', () => {
    scrollTo(document.querySelector("header"));
});