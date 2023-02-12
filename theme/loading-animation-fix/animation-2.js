function loadImage(imageUrl) {
  return new Promise((resolve, reject) => {
    var image = new Image();
    image.src = imageUrl;
    image.onload = function () {
      resolve(image);
    };
    image.onerror = function () {
      console.warn(`Image ${imageUrl} could not be loaded, ignoring...`);
      resolve();
    };
  });
}

var imageUrls = [
  "path/to/image1.jpg",
  "path/to/image2.jpg",
  // ...
];

Promise.all(imageUrls.map(loadImage))
  .then((images) => {
    console.log("All images loaded successfully");
    // Put your code that uses the images here
    // ...
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
  })
  .catch((error) => {
    console.error(error);
    // Put your code to be executed when the images are ignored here
    // ...
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
