// Import the images that will be displayed in the carousel
const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];


const carouselWrapper = document.getElementById("carousel-wrap");
const carouselThumbnail = document.getElementById("thumbnails");

// For each image in the list, create an img element and append it to the carousel

for (let i = 0; i < images.length; i++){

    // Create the image element and set the src attribute
    const carouselImage = document.createElement("img");
    carouselImage.setAttribute("src", images[i]);

    // Create the thumbnail element
    const thumbElement = document.createElement("div");

    // Give the appropriate classes to the elements
    // If the element is the first one, give it the additional "active" class
    carouselImage.classList.add("ms_carousel-imgs");
    thumbElement.classList.add("thumb-item");
    if (i === 0){
        carouselImage.classList.add("active");
        thumbElement.classList.add("active");
    }

    // Add the element to the carousel wrapper element
    carouselWrapper.append(carouselImage);
    carouselThumbnail.append(thumbElement);

}


// Initialize the index and the buttons

let activeImageIndex = 0;
const imageList = carouselWrapper.children;
const thumbList = carouselThumbnail.children;
const nextButton = document.getElementById("button-next");
const prevButton = document.getElementById("button-prev");

nextButton.addEventListener("click", goToNextImage);

prevButton.addEventListener("click", goToPreviousImage);


function goToNextImage(){

    // Remove the "active" class from the current image. Do the same to the thumbnail element
    imageList[activeImageIndex].classList.remove("active");
    thumbList[activeImageIndex].classList.remove("active");
    // Advanced the activeImage counter
    activeImageIndex++;
    // if activeImageIndex > number of images ( >= array length) restart from 0
    if (activeImageIndex === imageList.length){
        activeImageIndex = 0;
    }
    // Add the "active" class to the following image. Do the same to the thumbnail element
    imageList[activeImageIndex].classList.add("active");
    thumbList[activeImageIndex].classList.add("active");

}

function goToPreviousImage(){

    // Remove the "active" class from the current image. Do the same to the thumbnail element
    imageList[activeImageIndex].classList.remove("active");
    thumbList[activeImageIndex].classList.remove("active");

    // Decrement the activeImage counter
    activeImageIndex--;
    // if activeImageIndex < 0 restart from last one
    if (activeImageIndex < 0){
        activeImageIndex = imageList.length - 1;
    }
    // Add the "active" class to the previous image. Do the same to the thumbnail element
    imageList[activeImageIndex].classList.add("active");
    thumbList[activeImageIndex].classList.add("active");
}


const clock = setInterval(goToNextImage, 3000);


