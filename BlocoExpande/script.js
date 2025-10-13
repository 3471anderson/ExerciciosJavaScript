const box = document.getElementById("expandir");

box.addEventListener("mouseenter", () => {
    box.style.width = "300px";
    box.style.height = "300px";
    box.style.backgroundColor = "#80b3ff";
});

box.addEventListener("mouseleave", () => {
    box.style.width = "150px";
    box.style.height = "150px";
    box.style.backgroundColor = "#4f8cff";
});

