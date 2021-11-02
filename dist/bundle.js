(() => {
  // src/main.js
  console.log("poetics!");
  var container = document.getElementById("container");
  for (let i = 1; i <= 8; i++) {
    const img = new Image();
    img.src = `./assets/${i}.png`;
    container.insertAdjacentHTML("beforeend", `
    <div class="imageContainer">
      <img src="./assets/${i}.png" />    
      <div id="image-${i}" class="colorCover" />
    </div>
  `);
  }
  var selectedImage = document.getElementById(`image-3`);
  selectedImage.classList.add("selected");
})();
//# sourceMappingURL=bundle.js.map
