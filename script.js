document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll("section, article, .card");

    elementos.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 1s";
    });

    setTimeout(() => {
        elementos.forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    }, 300);
});