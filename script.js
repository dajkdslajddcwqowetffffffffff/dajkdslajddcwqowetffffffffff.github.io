const images = 3;
  
let currentImageIndex = 0;

// Function to update the displayed image
function updateImage() {
    const image = document.getElementById('image');
    image.src = "./img/" + currentImageIndex + ".png";
    image.style.opacity = 0; // Hide the image initially

    // Once the image is loaded, fade it in
    image.onload = () => {
      image.style.opacity = 1;
    };
}

// Function to navigate to the next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images;
    updateImage();
}

// Function to navigate to the previous image
function previousImage() {
    currentImageIndex = (currentImageIndex + 1) % images;;
    updateImage();
}



// Event listener for keyboard events
document.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
      nextImage();
    } else if (event.key === 'l') {
      previousImage();
    }
  });
  

document.getElementById('nextButton').addEventListener('click', nextImage);
document.getElementById('previousButton').addEventListener('click', previousImage);
// Initially display the first image
updateImage();