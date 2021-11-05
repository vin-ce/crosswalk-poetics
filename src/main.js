import "./styles/styles.styl"
import "./poems.js"
import { addLive, clearLive, addPoem } from './firebase'

if (window.location.pathname === "/") initHomePage()

function initHomePage () {
  const container = document.querySelector('.container')



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
  const SELECTION_INTERVAL = 1000

  // https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  let imageIndexArr = Array.from({ length: NUM_OF_IMAGES }, (_, i) => i + 1)

  imageIndexArr = randomiseArray(imageIndexArr)
  // curIndex keeps track of which el in array we're on
  let curIndex = 0

  let inProcessPoem = []
  let isMakingPoem = false

  // this keeps track of which image index we had just selected
  let prevSelectedIndex

  const interval = setInterval(() => {

    // re-randomise, reset cur index
    if (curIndex >= NUM_OF_IMAGES) {
      imageIndexArr = randomiseArray(imageIndexArr)
      curIndex = 0
    }

    // console.log("TEST ARRAY", isMakingPoem, inProcessPoem)

    // remove selected from previous image
    if (prevSelectedIndex) {
      document.getElementById(`image-${prevSelectedIndex}`).classList.remove('selected')
    }

    // add selected class to selected image
    const selectedImage = document.getElementById(`image-${imageIndexArr[ curIndex ]}`)
    selectedImage.classList.add('selected')

    if (isMakingPoem)
      isMakingPoem = addToPoem(imageIndexArr[ curIndex ], inProcessPoem, isMakingPoem)

    prevSelectedIndex = imageIndexArr[ curIndex ]
    curIndex++

  }, SELECTION_INTERVAL)

  // starts poem creation on space press
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      if (!isMakingPoem) {
        isMakingPoem = true
      }
    }
  })


}

let selectingLength = getRandomLength()
const MIN_LINE_LENGTH = 3
const MAX_LINE_LENGTH = 8
// const PARAGRAPH_BREAK_CHANCE = 0.1
const NORMAL_BREAK_CHANCE = 0.25

let imagesAdded = 0
let curLineLength = 0


const audio = document.querySelector('.crosswalkBeeps')

function addToPoem (curImageIndex, inProcessPoem) {


  if (inProcessPoem.length === 0) {
    console.log("starting...")
    audio.play()
  }

  // poem is completed
  if (imagesAdded === selectingLength) {

    // clear live collection
    // add to poems collection

    clearLive(inProcessPoem.length)
    addPoem(inProcessPoem)

    // inProcessPoem = [] <--- this doesn't work
    inProcessPoem.length = 0

    selectingLength = getRandomLength()
    console.log('selecting length', selectingLength, inProcessPoem)

    audio.pause()
    audio.currentTime = 0

    imagesAdded = 0
    curLineLength = 0
    isMakingPoem = false

    return false
  }


  addSection(curImageIndex)
  imagesAdded++
  curLineLength++

  if (curLineLength === MAX_LINE_LENGTH) {

    addSection('break')
    curLineLength = 0

  }

  if (curLineLength >= MIN_LINE_LENGTH) {

    if (Math.random() <= NORMAL_BREAK_CHANCE) {

      addSection('break')

      // if (Math.random() <= PARAGRAPH_BREAK_CHANCE) {
      //   addSection('break')
      // }

      curLineLength = 0

    }

  }

  function addSection (content) {
    inProcessPoem.push(content)
    let id = inProcessPoem.length

    console.log("ID", id, content)
    if (content !== 'break') {
      addLive(id, 'image', content)
    } else {
      addLive(id, 'break')
    }
  }

  // add to live feed

  return true

}

function randomiseArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ];
  }

  return array
};

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomLength () {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  let min = 20
  let max = 30
  // let min = 5
  // let max = 8
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
