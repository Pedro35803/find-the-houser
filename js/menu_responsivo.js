const iconHamburgue = document.querySelector(".menu-hamburguer");
const menuLinks = document.querySelectorAll(".menu-links li");
const menuControl = document.querySelector("#menu-control");
const links = document.querySelectorAll(".links-menu");

const animateLinks = () => {
    menuLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = "";
        } else {
            const calcTempEntry = index / 6 + 0.3;
            link.style.animation = `navLinkFade 0.5s ease forwards ${calcTempEntry}s`;
        }
    });
}

iconHamburgue.addEventListener("click", () => {
    iconHamburgue.classList.toggle("active");
    document.body.style.overflow = !menuControl.checked ? "hidden" : "initial";
    animateLinks();
});

links.forEach(link => link.addEventListener("click", () => {
    const larguraTela = window.innerWidth;
    if (menuControl.checked && larguraTela <= 775) {
        menuControl.checked = false;
        iconHamburgue.classList.toggle("active");
        document.body.style.overflow = "initial";
    }
}));