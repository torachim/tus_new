document.addEventListener("DOMContentLoaded", () => {

    const openBurger = document.getElementById("burger");
    const closeBurger = document.getElementById("closeMenu");
    const menu = document.getElementById("burgerMenu");

    openBurger.addEventListener("click", () => {
        menu.style.display = "flex";
    })

    closeBurger.addEventListener("click", () => {
        menu.style.display = "none";
    })
})
