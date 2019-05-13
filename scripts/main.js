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

window.onscroll = function () {
    document.getElementById("scrollToTopButton").style.display =
        (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
};
