//Event Listeners:
// onMouseOver: Enlarges the image when hovered over.
// onMouseOut: Returns the image to its original size when the mouse moves away.

let val = document.querySelectorAll(".images");

val.forEach(image => {
    image.addEventListener("mouseover", () => {
        image.classList.add("enlarged");
    });

    image.addEventListener("mouseout", () => {
        image.classList.remove("enlarged");
    });

    image.addEventListener("click", () => {
        const src = image.src; // Get image source
        console.log("Image clicked: " + src);
        createLightbox(src); // Call createLightbox function
        val.forEach(img => {
            img.style.display = "none"; // Hide all images
        });
    });
});

function createLightbox(src) {
    // Create lightbox elements
    const lightboxOverlay = document.createElement("div");
    lightboxOverlay.classList.add("lightbox-overlay");
    const lightboxImg = document.createElement("img");
    lightboxImg.src = src;
    lightboxImg.classList.add("lightbox-img");
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("close-btn");

    // Append elements to the document
    lightboxOverlay.appendChild(lightboxImg);
    lightboxOverlay.appendChild(closeBtn);
    document.body.appendChild(lightboxOverlay);

    // Close lightbox when close button is clicked
    closeBtn.addEventListener("click", function () {
        document.body.removeChild(lightboxOverlay);
        val.forEach(img => {
            img.style.display = "block"; // Show all images
        });
    });

    // Close lightbox when overlay is clicked
    lightboxOverlay.addEventListener("click", function (event) {
        if (event.target === lightboxOverlay) {
            document.body.removeChild(lightboxOverlay);
            val.forEach(img => {
                img.style.display = "block"; // Show all images
            });
        }
    });
}
