// Array containing URLs of your GIFs
var gifs = [
    "/",
    "gif2.gif",
    "gif3.gif",
    // Add more GIF URLs as needed
];

// Function to get a random GIF URL from the array
function getRandomGif() {
    return gifs[Math.floor(Math.random() * gifs.length)];
}

// Update the src attribute of the image with a random GIF
document.getElementById("randomGif").src = getRandomGif();
