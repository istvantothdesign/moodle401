//Error handling

function loadImage(src) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.onload = function () {
      if (img.naturalWidth == 0) {
        reject(new Error(`Image not found: ${src}`));
      } else {
        resolve(img);
      }
    };
    img.onerror = function () {
      reject(new Error(`Image not found: ${src}`));
    };
    img.src = src;
  });
}

var imageUrls = [
  "path/to/image1.jpg",
  "path/to/image2.jpg",
  "path/to/image3.jpg",
];

Promise.all(imageUrls.map(loadImage))
  .then((images) => {
    console.log("All images loaded successfully");
    // do something with the images
  })
  .catch((error) => {
    console.error(error);
    console.log("One or more images failed to load, ignoring...");
    // code to handle missing images
    //Loading animation V3
    function asdPageLoadFix() {
      //Working solution
      const anchors = document.querySelectorAll("a");
      const transition_el = document.querySelector(".transition");
      console.log("loaded");
      document.body.classList.add("ast-no-scroll");

      setTimeout(() => {
        transition_el.classList.remove("is-active");
      }, 500);
      setTimeout(() => {
        transition_el.classList.add("hidden");
        document.body.classList.remove("ast-no-scroll");
      }, 900);
    }
    asdPageLoadFix();
  });
