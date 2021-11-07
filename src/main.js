import "./styles/styles.styl"
import "./poems.js"
import "./button.js"
import { db, addLive, clearLive, addPoem, addPoemStatus } from './firebase'
import { collection, onSnapshot } from "firebase/firestore";

if (window.location.pathname === "/") initHomePage()


function initHomePage () {
  const container = document.querySelector('.container')

  const TOTAL_NUM_OF_IMAGES = 85

  const NUM_OF_IMAGES = 54
  const NUM_OF_TXT = 31


  // https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  // creates empty array with incrementing numbers from 1 -> TOTAL_NUM_OF_IMAGES
  // let imageIndexArr = Array.from({ length: TOTAL_NUM_OF_IMAGES }, (_, i) => i + 1)



  let imageIndexArr = []

  // create image index arr

  for (let i = 1; i <= NUM_OF_IMAGES; i++) {
    // console.log("making i", i, imageIndexArr)
    const img = new Image()
    img.src = `./assets/img-${i}.png`

    imageIndexArr.push(`img-${i}`)

  }

  for (let j = 1; j <= NUM_OF_TXT; j++) {

    const img = new Image()
    img.src = `./assets/txt-${j}.png`
    imageIndexArr.push(`txt-${j}`)

  }

  // randomise order in which the images will be displayed on page

  imageIndexArr = randomiseArray(imageIndexArr)

  for (let k = 0; k < TOTAL_NUM_OF_IMAGES; k++) {
    container.insertAdjacentHTML('beforeend', `
    <div class="imageContainer">
      <img src="./assets/${imageIndexArr[ k ]}.png" />    
      <div id="${imageIndexArr[ k ]}" class="colorCover"></div>
    </div>
   `)
  }

  const SELECTION_INTERVAL = 1000

  // randomise again for selection
  imageIndexArr = randomiseArray(imageIndexArr)

  // curIndex keeps track of which el in array we're on
  let curIndex = 0

  let inProcessPoem = []
  let isMakingPoem = false

  let TEST_MAKING_POEM = false

  // this keeps track of which image index we had just selected
  let prevSelectedIndex

  // =========
  // =========
  // =========
  // INTERVALS

  let runSelectionInterval = setInterval(runSelection, SELECTION_INTERVAL)


  function pauseSelectionInterval (length) {
    console.log("SELECTION PAUSED")
    clearInterval(runSelectionInterval)

    if (!length) {

      setTimeout(() => {
        runSelectionInterval = setInterval(runSelection, SELECTION_INTERVAL)
      }, SELECTION_INTERVAL)

    } else {
      setTimeout(() => {
        runSelectionInterval = setInterval(runSelection, SELECTION_INTERVAL)
      }, length)
    }

  }



  function runSelection () {

    console.log("TEST MAKING POEM", TEST_MAKING_POEM)

    // re-randomise, reset cur index
    if (curIndex >= TOTAL_NUM_OF_IMAGES) {
      imageIndexArr = randomiseArray(imageIndexArr)
      curIndex = 0
    }

    // console.log("TEST ARRAY", isMakingPoem, inProcessPoem)

    // remove selected from previous image
    if (prevSelectedIndex) {
      document.getElementById(`${prevSelectedIndex}`).classList.remove('selected')
    }

    // add selected class to selected image
    const selectedImage = document.getElementById(`${imageIndexArr[ curIndex ]}`)
    selectedImage.classList.add('selected')

    if (isMakingPoem)
      isMakingPoem = addToPoem(imageIndexArr[ curIndex ], inProcessPoem, pauseSelectionInterval, SELECTION_INTERVAL)

    prevSelectedIndex = imageIndexArr[ curIndex ]
    curIndex++

  }

  // starts poem creation on space press
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      if (!isMakingPoem) {
        isMakingPoem = true
        addPoemStatus(true)
      }
    }
  })




  const poemStatusRef = collection(db, "poemStatus")

  const unsubscribePoemStatus = onSnapshot(poemStatusRef, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {

        newPoemStatus = change.doc.data()

        isMakingPoem = newPoemStatus.status

      }
    });
  });


}




let selectingLength = getRandomLength()
const MIN_LINE_LENGTH = 3
const MAX_LINE_LENGTH = 8
// const PARAGRAPH_BREAK_CHANCE = 0.1
const NORMAL_BREAK_CHANCE = 0.25

let imagesAdded = 0
let curLineLength = 0


const typewriter_clacks = document.querySelector('.typewriter_clacks')
const typewriter_carriage_return = document.querySelector('.typewriter_carriage_return')
const typewriter_bell = document.querySelector('.typewriter_bell')

function addToPoem (curImageIndex, inProcessPoem, pauseSelectionInterval, SELECTION_INTERVAL) {

  if (inProcessPoem.length === 0) {
    typewriter_clacks.play()
  }

  // poem is completed
  if (imagesAdded === selectingLength) {

    clearLive(inProcessPoem.length)
    addPoem(inProcessPoem)

    // inProcessPoem = [] <--- this doesn't work
    inProcessPoem.length = 0

    selectingLength = getRandomLength()

    typewriter_clacks.pause()
    typewriter_clacks.currentTime = 0

    typewriter_bell.play()

    pauseSelectionInterval(2000)

    imagesAdded = 0
    curLineLength = 0

    addPoemStatus(false)
    return false
  }


  addSection(curImageIndex)
  imagesAdded++
  curLineLength++

  // ---------
  // ADD BREAK

  if (curLineLength === MAX_LINE_LENGTH) {
    addBreak()
  } else if (curLineLength >= MIN_LINE_LENGTH) {
    if (Math.random() <= NORMAL_BREAK_CHANCE) {

      addBreak()
      // if (Math.random() <= PARAGRAPH_BREAK_CHANCE) {
      //   addSection('break')
      // }

    }
  }

  function addBreak () {
    console.log("BREAK")

    typewriter_clacks.pause()
    typewriter_carriage_return.play()

    addSection('break')
    pauseSelectionInterval()
    setTimeout(() => {
      typewriter_clacks.play()
    }, SELECTION_INTERVAL)

    curLineLength = 0

  }

  // -----------
  // ADD SECTION

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
