import "./styles/styles.styl"
import "./poems.js"

if (window.location.pathname === "/") initHomePage()

function initHomePage () {
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

    // container.insertAdjacentHTML('beforeend', `
    //   <div class="break" />
    // `)

  }




  const NUM_OF_IMAGES = 8

  // https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  let imageIndexArr = Array.from({ length: NUM_OF_IMAGES }, (_, i) => i + 1)

  imageIndexArr = randomiseArray(imageIndexArr)
  // curIndex keeps track of which el in array we're on
  let curIndex = 0

  // this keeps track of which image index we had just selected
  let prevSelectedIndex

  const interval = setInterval(() => {

    // re-randomise, reset cur index
    if (curIndex >= NUM_OF_IMAGES) {
      imageIndexArr = randomiseArray(imageIndexArr)
      curIndex = 0
      clearInterval(interval)
    }

    console.log(curIndex, prevSelectedIndex)
    console.log(imageIndexArr)

    if (prevSelectedIndex) {
      // remove selected from previous image
      console.log('prev el', document.getElementById(`image-${prevSelectedIndex}`))
      document.getElementById(`image-${prevSelectedIndex}`).classList.remove('selected')
    }

    // add selected class to selected image
    const selectedImage = document.getElementById(`image-${imageIndexArr[ curIndex ]}`)
    selectedImage.classList.add('selected')

    prevSelectedIndex = imageIndexArr[ curIndex ]
    curIndex++

  }, 1000)


}

function randomiseArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ];
  }

  return array
};
