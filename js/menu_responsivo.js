const iconHamburgue = document.querySelector(".menu-hamburguer");
const menuLinks = document.querySelectorAll(".menu-links li");

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
    animateLinks();
});