import "./styles/styles.styl"

console.log("poetics!")

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

// ctx.fillRect(1000, 500, 100, 100)

// img.addEventListener('load', () => {
// })

// for (let i = 1; i <= 8; i++) {
//   const img = new Image()

//   img.onload = () => {
//     ctx.drawImage(img, 100 * i, 100, 100, 100)
//   }

// }

const container = document.getElementById('container')

for (let i = 1; i <= 8; i++) {
  const img = new Image()
  img.src = `./assets/${i}.png`

  container.insertAdjacentHTML('beforeend', `
    <div class="imageContainer">
      <img src="./assets/${i}.png" />    
      <div id="image-${i}" class="colorCover" />
    </div>
  `)
}

const selectedImage = document.getElementById(`image-3`)
selectedImage.classList.add('selected')