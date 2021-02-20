window.onload = () => scrollCheck();
window.onscroll = () => scrollCheck();

const mobileMenu = () => document.querySelector('ul').classList.toggle('mobilemenu');
const backToButton = document.getElementById("back-to-top");
const width = window.matchMedia("(max-width: 576px)");

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};



const scrollCheck = () =>
    (document.body.scrollTop > 200 ||
        (document.documentElement.scrollTop > 200 && !width.matches))
        ? (backToButton.style.display = "flex")
        : (backToButton.style.display = "none");