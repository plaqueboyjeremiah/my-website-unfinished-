const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const isPastHalfway = window.scrollY >= scrollableHeight / 2;

    navbar.classList.toggle("hidden", isPastHalfway);
});
