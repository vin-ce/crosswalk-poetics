import { collection, onSnapshot } from "firebase/firestore";
import { db, fetchPoems, fetchLatestPoem } from "./firebase"
import "./styles/poems.styl"

if (window.location.pathname === "/poems/" || window.location.pathname === "/poems") {
  loadPoems()
}

async function loadPoems () {

  // ----------------------------------------
  // FETCH ALL POEMS

  // const poemsArr = await fetchPoems()
  // console.log("POEMS", poemsArr)

  // const allPoems = document.querySelector('.allPoems')

  // poemsArr.forEach(poem => {

  //   const poemContainerEl = document.createElement("div")
  //   poemContainerEl.classList.add('poemContainer')


  //   console.log(poem.timestamp)
  //   poemContainerEl.insertAdjacentHTML('beforeend', `
  //     <div class="time">${poem.timestamp.toLocaleTimeString()}, ${poem.timestamp.toDateString()}</div>
  //     <div class="break" />
  //   `)

  //   poem.poem.forEach((piece, index) => {

  //     if (piece == 'break') {
  //       poemContainerEl.insertAdjacentHTML('beforeend', `
  //         <div class="break" />
  //       `)
  //     } else {
  //       poemContainerEl.insertAdjacentHTML('beforeend', `
  //         <img src="../assets/${piece}.png" />   
  //       `)
  //     }
  //   })

  //   allPoems.insertAdjacentElement('beforeend', poemContainerEl)

  // })

  // ----------------------------------------
  // UPDATING PREV POEM

  const poemsRef = collection(db, "poems")
  let newPrevPoemPiece

  const unsubscribePoems = onSnapshot(poemsRef, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {

        let data = change.doc.data()

        newPrevPoemPiece = {
          poem: data.poem,
          timestamp: data.timestamp.toDate()
        }

        addPrevPoem(newPrevPoemPiece)

        // clears live container
        liveEl.innerHTML = `
          <div class="heading">a new poem</div>
          <div class="break"></div>
          `
      }
    });
  });

  // ----------------------------------------
  // LIVE POEMS

  const liveRef = collection(db, "live")
  let newLivePoemPiece

  const liveEl = document.querySelector('.live')

  const unsubscribeLive = onSnapshot(liveRef, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {

        newLivePoemPiece = change.doc.data()

        if (newLivePoemPiece.image) {

          liveEl.insertAdjacentHTML('beforeend', `
            <img src="../assets/${newLivePoemPiece.image}.png" />  
          `)

        } else {
          liveEl.insertAdjacentHTML('beforeend', `
            <div class="break"></div>
          `)
        }
      }
    });
  });


  // ----------------------------------------
  // PREV POEM

  // order is important that this part comes 
  // after the subscription things

  const latestPoem = await fetchLatestPoem()

  addPrevPoem(latestPoem)

}

// adding poem to prevPoem section -- used twice.
function addPrevPoem (data) {

  const prevContainerEl = document.querySelector('.prev')
  prevContainerEl.innerHTML = ''

  prevContainerEl.insertAdjacentHTML('beforeend', `
      <div class="time heading">created on ${data.timestamp.toLocaleTimeString()}</div>
      <div class="break"></div>
    `)

  data.poem.forEach((piece, index) => {

    if (piece == 'break') {
      prevContainerEl.insertAdjacentHTML('beforeend', `
          <div class="break" />
        `)
    } else {
      prevContainerEl.insertAdjacentHTML('beforeend', `
          <img src="../assets/${piece}.png" />   
        `)
    }
  })

}
