console.log("JS Cargado");

window.initNavbar = () => {
    //Seleccion de elementos del DOM
    const toggleButton = document.querySelector(".navbar__toogle-btn");
    const mobileMenu = document.querySelector(".navbar__mobile-menu");

    console.log(toggleButton);
    console.log(mobileMenu);

    const toggleMenu = () => {
        mobileMenu.style.display =
            mobileMenu.style.display === "none" || mobileMenu.style.display === ""
            ? "flex"
            : "none";
    };

    const hideMenuResize = () => {
        mobileMenu.style.display = "none"
    };

    toggleButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", hideMenuResize);
    window.addEventListener("load", hideMenuResize);
};

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav__link a");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});