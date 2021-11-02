import { collection, onSnapshot } from "firebase/firestore";
import { db, fetchPoems } from "./firebase"
import "./styles/poems.styl"

if (window.location.pathname === "/poems/" || window.location.pathname === "/poems") {
  loadPoems()
}

async function loadPoems () {

  // ----------------------------------------
  // FETCH POEMS

  const poemsArr = await fetchPoems()
  console.log("POEMS", poemsArr)

  const allPoems = document.querySelector('.allPoems')

  poemsArr.forEach(poem => {

    const poemContainerEl = document.createElement("div")
    poemContainerEl.classList.add('poemContainer')


    console.log(poem.timestamp)
    poemContainerEl.insertAdjacentHTML('beforeend', `
      <div class="time">${poem.timestamp.toLocaleTimeString()}, ${poem.timestamp.toDateString()}</div>
      <div class="break" />
    `)

    poem.poem.forEach((piece, index) => {

      if (piece == 'break') {
        poemContainerEl.insertAdjacentHTML('beforeend', `
          <div class="break" />
        `)
      } else {
        poemContainerEl.insertAdjacentHTML('beforeend', `
          <img src="../assets/${piece}.png" />   
        `)
      }
    })

    allPoems.insertAdjacentElement('beforeend', poemContainerEl)

  })


  // ----------------------------------------
  // LIVE POEMS

  const liveRef = collection(db, "live")
  let newPoemPiece

  const liveEl = document.querySelector('.live')


  const unsubscribe = onSnapshot(liveRef, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {

        newPoemPiece = change.doc.data()
        console.log("added: ", newPoemPiece);

        if (newPoemPiece.timestamp) {
          // TO DO
        }

        if (newPoemPiece.image) {

          liveEl.insertAdjacentHTML('beforeend', `
            <img src="../assets/${newPoemPiece.image}.png" />  
          `)

        } else {
          liveEl.insertAdjacentHTML('beforeend', `
            <div class="break" />
          `)
        }
      }
    });
  });


}

