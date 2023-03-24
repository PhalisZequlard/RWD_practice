let image = document.getElementById("image");
let currentImage = 1;

function changeImage() {
  if (currentImage === 1) {
    image.src = "../../images/model-3.jpg";
    currentImage = 2;
  } else {
    image.src = "../../images/model-x.jpg";
    currentImage = 1;
  }
}
