window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    
    // Shrinking Title
    let title = document.getElementById("title");
    let newSize = Math.max(36, 72 - scrollY / 10); // Title shrinks but stays readable
    title.style.fontSize = newSize + "px";

    // Growing Image
    let image = document.getElementById("growing-image");
    let scaleFactor = 1 + scrollY / 500; // Increase size as you scroll
    image.style.transform = `scale(${scaleFactor})`;
});
