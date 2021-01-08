window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleMenu = () =>{
    const toggleBtn = document.querySelector(".toggle");
    const menuBar = document.querySelector(".menu");
    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("active");
    });
    toggleBtn.addEventListener("click", () => {
        menuBar.classList.toggle("active");
    });
}

toggleMenu();